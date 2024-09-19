import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs/promises';
import sharp from 'sharp';
import { createScheduler, createWorker } from 'tesseract.js';
import { translate } from '@vitalets/google-translate-api';

export const dynamic = 'force-dynamic';

interface TranslationResult {
  translations: { original: string; translated: string }[];
  processed_image: string;
}

interface FormidableFile {
  filepath: string;
  originalFilename: string;
  newFilename: string;
  mimetype: string;
  size: number;
}

export async function POST(request: NextRequest) {
    const form = formidable();
  
  try {
    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
        form.parse(request as any, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      });
  
    const imageFile = files.image as unknown as FormidableFile;
    if (!imageFile || Array.isArray(imageFile)) {
    return NextResponse.json({ error: 'Invalid file upload' }, { status: 400 });
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

    const result: TranslationResult = { 
        translations: [{ original: text, translated: translatedText }],
        processed_image: base64Image
      };

    // Clean up: delete the temporary file
    await fs.unlink(imagePath);

    return NextResponse.json(result)

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ error: 'Image processing failed' }, { status: 500 });
  }
}