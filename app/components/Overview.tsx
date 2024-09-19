'use client'

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout, Server, Code } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Layout, color: 'text-blue-400' },
  { name: 'Backend', icon: Server, color: 'text-green-400' },
  { name: 'Full Stack', icon: Code, color: 'text-purple-400' },
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
            Enthusiastic Software Engineer and avid gamer, ready to level up team success through hard work, attention to detail, and excellent problem-solving skills. Equipped with a strong desire to keep pace with cutting-edge web technologies and gaming industry trends.
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
                {index === 2 && "Seamlessly integrating all game components"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}