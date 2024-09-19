'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface Translation {
  original: string;
  translated: string;
}

interface TranslationResponse {
  translations: Translation[];
  processed_image: string;
}

export default function MangaTranslator() {
  const [image, setImage] = useState<File | null>(null);
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [processedImage, setProcessedImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!image) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post<TranslationResponse>('/api/translate', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setTranslations(response.data.translations);
      setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image}`);
    } catch (error) {
      console.error('Error translating manga:', error);
      alert('Failed to translate. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-fit flex items-center justify-center">
      <div className="container max-w-xl mx-auto p-6 bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-6 mb-8 border border-blue-500 text-blue-300">
        <h1 className="text-xl font-bold mb-6 text-center">Manga Translator</h1>
        <form onSubmit={handleSubmit} className="mb-6 flex flex-col items-center">
          <input 
            type="file" 
            onChange={handleImageUpload} 
            className="mb-4 w-full max-w-xs text-sm"
            accept="image/*"
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
            disabled={isLoading || !image}
          >
            {isLoading ? 'Translating...' : 'Translate'}
          </button>
        </form>
        
        {processedImage && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-center">Processed Image</h2>
            <Image src={processedImage} alt="Processed manga panel" width={500} height={300} layout="responsive" />
          </div>
        )}
        
        {translations.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-center">Translations</h2>
            {translations.map((t, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
                <p className="mb-2"><strong>Original:</strong> {t.original}</p>
                <p><strong>Translated:</strong> {t.translated}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}