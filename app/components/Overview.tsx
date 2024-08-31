'use client'

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout, Server, Code } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Layout, color: 'text-green-400' },
  { name: 'Backend', icon: Server, color: 'text-green-400' },
  { name: 'Full Stack', icon: Code, color: 'text-green-400' },
];

const TypewriterText = ({ text }: { text: string }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  return (
    <motion.h1 className="text-4xl md:text-5xl font-bold mb-2 text-green-700 font-mono">
      {text.split('').map((char, index): React.ReactNode => (
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
  return (
    <section className="mb-8 relative z-10 pt-8 pb-4 font-mono text-green-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterText text="Angga Radifan Sumarna" />
          <p className="text-xl md:text-2xl font-semibold text-green-700">
            Software Engineer
          </p>
        </motion.div>
        <motion.div
          className="bg-black bg-opacity-70 shadow-lg rounded-lg p-6 mb-8 border border-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="leading-relaxed">
            Enthusiastic Software Engineer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. Motivated to learn, grow and excel in the tech industry, bringing a strong desire to keep pace with cutting-edge web technologies.
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
              className="bg-black bg-opacity-70 shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center border border-green-500"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 255, 0, 0.2)' }}
              transition={{ duration: 0.2 }}
            >
              <skill.icon className={`w-10 h-10 ${skill.color} mb-3`} />
              <h3 className="text-lg font-semibold mb-1 text-green-400">{skill.name}</h3>
              <p className="text-green-300 text-sm">
                {index === 0 && "Creating intuitive user interfaces"}
                {index === 1 && "Building robust server-side solutions"}
                {index === 2 && "Seamlessly integrating frontend and backend"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}