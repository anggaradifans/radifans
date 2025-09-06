'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="mb-16 relative z-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-blue-400">Send a Message</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-4 md:p-8 border border-blue-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['name', 'email', 'message'].map((field) => (
          <div key={field} className="mb-4 md:mb-6">
            <label htmlFor={field} className="block text-sm font-medium text-blue-400 mb-2 capitalize">
              {field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Your Message'}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 bg-opacity-50 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-blue-300 text-sm md:text-base min-h-[100px]"
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 bg-opacity-50 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-blue-300 text-sm md:text-base"
                placeholder={field === 'name' ? 'Your full name' : 'your.email@example.com'}
                required
              />
            )}
          </div>
        ))}
        <motion.button
          type="submit"
          className="w-full bg-blue-700 text-blue-100 px-4 py-3 md:py-3 rounded-md hover:bg-blue-600 transition flex items-center justify-center text-sm md:text-base font-medium"
          whileHover={{ scale: 1.02, boxShadow: '0 0 8px rgb(0, 100, 255)' }}
          whileTap={{ scale: 0.98 }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <motion.div
              className="w-6 h-6 border-t-2 border-blue-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              Send
              <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </motion.button>
        <AnimatePresence>
          {status && (
            <motion.div
              className={`mt-4 p-3 rounded-md ${
                status === 'success' ? 'bg-blue-900 bg-opacity-50 text-blue-300' : status === 'error' ? 'bg-red-900 bg-opacity-50 text-red-300' : 'hidden'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {status === 'success' ? (
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully!
                </div>
              ) : status === 'error' ? (
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Failed to send message. Please try again.
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}