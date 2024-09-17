'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function MangaTranslator() {
  const [image, setImage] = useState(null);
  const [translations, setTranslations] = useState([{original: "", translated: ""}]);
  const [processedImage, setProcessedImage] = useState("");

  const handleImageUpload = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/translate', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setTranslations(response.data.translations);
      setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image}`);
    } catch (error) {
      console.error('Error translating manga:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manga Translator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={() => handleImageUpload} className="mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Translate
        </button>
      </form>
      
      {processedImage && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Processed Image</h2>
          <img src={processedImage} alt="Processed manga panel" className="max-w-full h-auto" />
        </div>
      )}
      
      {translations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Translations</h2>
          {translations.map((t, index) => (
            <div key={index} className="mb-2">
              <p><strong>Original:</strong> {t.original}</p>
              <p><strong>Translated:</strong> {t.translated}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}