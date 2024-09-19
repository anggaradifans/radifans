// pages/api/translate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import sharp from 'sharp';
import { createScheduler, createWorker } from 'tesseract.js';
import { translate } from '@vitalets/google-translate-api';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface TranslationResult {
  translations: { original: string; translated: string }[];
  processed_image: string;
}

// Define a type for the file we expect from formidable
interface FormidableFile {
  filepath: string;
  originalFilename: string;
  newFilename: string;
  mimetype: string;
  size: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranslationResult | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const form = formidable();
  
  try {
    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const imageFile = files.image as unknown as FormidableFile;
    if (!imageFile || Array.isArray(imageFile)) {
      res.status(400).json({ error: 'Invalid file upload' });
      return;
    }

    const imagePath = imageFile.filepath;

    // Image processing
    const processedImageBuffer = await sharp(imagePath)
      .greyscale()
      .modulate({
        brightness: 1,
        saturation: 1.5,
        hue: 180
      })
      .sharpen()
      .toBuffer();

    // OCR
    const scheduler = createScheduler();
    const worker = await createWorker();
    scheduler.addWorker(worker);
    const { data: { text } } = await scheduler.addJob('recognize', processedImageBuffer);
    await scheduler.terminate();

    // Translation
    const { text: translatedText } = await translate(text, { to: 'en' });

    // Convert processed image to base64
    const base64Image = processedImageBuffer.toString('base64');

    res.status(200).json({ 
      translations: [{ original: text, translated: translatedText }],
      processed_image: base64Image
    });

    // Clean up: delete the temporary file
    await fs.unlink(imagePath);

  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Image processing failed' });
  }
}