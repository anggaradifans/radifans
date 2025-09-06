'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Layout, Server, Code, Download, Linkedin, Github, Mail, X } from 'lucide-react';
import Contact from './Contact';

const skills = [
  { name: 'Frontend', icon: Layout, color: 'text-blue-400' },
  { name: 'Backend', icon: Server, color: 'text-green-400' },
  { name: 'Full Stack', icon: Code, color: 'text-purple-400' },
];

const actionButtons = [
  { 
    name: 'Download CV', 
    icon: Download, 
    action: () => { 
      const link = document.createElement('a');
      link.href = '/documents/Angga-Radifan-Sumarna-CV.pdf';
      link.download = 'Angga-Radifan-Sumarna-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } 
  },
  { name: 'LinkedIn', icon: Linkedin, action: () => { window.open('https://www.linkedin.com/in/anggaradifans/', '_blank') } },
  { name: 'GitHub', icon: Github, action: () => { window.open('https://github.com/anggaradifans', '_blank') } },
];

const TypewriterText = ({ text }: { text: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  return (
    <motion.h1 className="text-xl md:text-2xl font-bold mb-2 text-blue-500">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          animate={controls}
          initial={{ opacity: 0 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function Overview() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <section className="mb-8 relative z-10 pt-2 pb-4 text-blue-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterText text="Angga Radifan Sumarna" />
          <p className="text-l md:text-xl font-semibold text-green-500">
            Software Engineer
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-900 bg-opacity-70 shadow-lg rounded-lg p-6 mb-8 border border-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="leading-relaxed text-blue-300">
            Senior Software Engineer passionate about building impactful digital solutions that solve real-world problems. 
            With 4+ years of experience across fintech, healthcare, and e-commerce domains, I specialize in creating 
            full-stack applications that prioritize performance, user experience, and scalability.
          </p>
          <p className="leading-relaxed text-blue-300 mt-4">
            Key achievements include developing a modern marketplace platform with advanced search and real-time features, 
            and creating an innovative personal finance tracker that seamlessly integrates Telegram bots with Supabase. 
            Experienced in leading technical implementations using React, Node.js, Java, and cloud technologies.
          </p>
          <p className="leading-relaxed text-blue-300 mt-4">
            Always exploring emerging technologies and gaming industry trends to bring creative solutions to complex challenges.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-900 bg-opacity-70 shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center border border-blue-500"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 100, 255, 0.2)' }}
              transition={{ duration: 0.2 }}
            >
              <skill.icon className={`w-10 h-10 ${skill.color} mb-3`} />
              <h3 className="text-md font-semibold mb-1 text-blue-400">{skill.name}</h3>
              <p className="text-blue-300 text-xs">
                {index === 0 && "Crafting immersive user interfaces"}
                {index === 1 && "Building powerful server-side solutions"}
                {index === 2 && "Seamlessly integrating all components"}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {actionButtons.map((button) => (
            <motion.button
              key={button.name}
              onClick={button.action}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button.icon className="w-5 h-5" />
              <span>{button.name}</span>
            </motion.button>
          ))}
          <motion.button
            onClick={openContactModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ height: '100vh' }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-4 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative border border-blue-500"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 text-blue-300 hover:text-blue-100"
              >
                <X className="w-6 h-6" />
              </button>
              <Contact />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}