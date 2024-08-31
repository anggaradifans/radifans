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
    <section className="mb-16 relative z-10 font-mono">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Get in Touch</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-black bg-opacity-70 shadow-lg rounded-lg p-8 border border-green-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {['name', 'email', 'message'].map((field) => (
          <div key={field} className="mb-6">
            <label htmlFor={field} className="block text-sm font-medium text-green-400 mb-2 capitalize">
              {field}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black bg-opacity-50 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition text-green-300"
                rows={4}
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black bg-opacity-50 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition text-green-300"
                required
              />
            )}
          </div>
        ))}
        <motion.button
          type="submit"
          className="w-full bg-green-700 text-green-100 px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgb(0, 255, 0)' }}
          whileTap={{ scale: 0.95 }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <motion.div
              className="w-6 h-6 border-t-2 border-green-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </motion.button>
        <AnimatePresence>
          {status && (
            <motion.div
              className={`mt-4 p-3 rounded-md ${
                status === 'success' ? 'bg-green-900 bg-opacity-50 text-green-300' : 'bg-red-900 bg-opacity-50 text-red-300'
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