'use client'

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ReCaptchaV3Form: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [copyStatus, setCopyStatus] = useState<string>('');

  const appendDebugInfo = (info: string) => {
    setDebugInfo(prev => `${prev}\n${new Date().toISOString()}: ${info}`);
  };

  useEffect(() => {
    appendDebugInfo(`Current origin: ${window.location.origin}`);
    appendDebugInfo(`SITE_KEY: ${SITE_KEY ? `${SITE_KEY.slice(0, 10)}...` : 'Not set'}`);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('Token copied to clipboard!');
      appendDebugInfo('Token copied to clipboard');
    } catch (err) {
      setCopyStatus('Failed to copy token');
      appendDebugInfo(`Failed to copy token: ${err}`);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    appendDebugInfo('Form submitted');
    setCopyStatus('');

    if (!SITE_KEY) {
      appendDebugInfo('Error: No reCAPTCHA site key found');
      setCopyStatus('Error: No reCAPTCHA site key found');
      return;
    }

    try {
      appendDebugInfo('Executing reCAPTCHA...');
      const token = await window.grecaptcha.execute(SITE_KEY, { action: 'submit' });
      appendDebugInfo(`reCAPTCHA token received. Length: ${token.length}`);
      await copyToClipboard(token);
    } catch (error) {
      appendDebugInfo(`Error executing reCAPTCHA: ${error}`);
      setCopyStatus('Error executing reCAPTCHA. Please check the debug info.');
    }
  };

  if (!SITE_KEY) {
    return <div>Error: No reCAPTCHA site key found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
        onLoad={() => appendDebugInfo('reCAPTCHA script loaded')}
        onError={() => appendDebugInfo('Error loading reCAPTCHA script')}
      />
      <h1 className="text-2xl font-bold mb-4">reCAPTCHA v3 Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Enter some data" 
          className="w-full p-2 border rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit and Copy Token
        </button>
      </form>
      {copyStatus && (
        <div className={`mt-2 p-2 rounded ${copyStatus.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {copyStatus}
        </div>
      )}
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="font-bold">Debug Info:</h2>
        <pre className="whitespace-pre-wrap overflow-auto max-h-60">{debugInfo}</pre>
      </div>
    </div>
  );
};

export default ReCaptchaV3Form;