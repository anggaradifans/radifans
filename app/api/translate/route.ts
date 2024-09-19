import sharp from 'sharp';
import { createScheduler, createWorker } from 'tesseract.js';
import { translate } from '@vitalets/google-translate-api';

export const dynamic = 'force-dynamic';

interface TranslationResult {
  translations: { original: string; translated: string }[];
  processed_image: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Image processing
    const processedImageBuffer = await sharp(buffer)
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
      processed_image: `data:image/jpeg;base64,${base64Image}`
    };

    return Response.json(result);
  } catch (error) {
    console.error('Error processing image:', error);
    return Response.json({ error: 'Image processing failed' }, { status: 500 });
  }
}