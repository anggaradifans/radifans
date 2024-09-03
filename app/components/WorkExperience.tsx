'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    company: "Tilaka.id",
    position: "Software Engineer",
    duration: "July 2022 - Present",
    level: "Level 3",
    description: [
      "Engineered and optimized existing products while contributing to the development of new cutting-edge software solutions.",
      "Leveraged Node.js and Java-based frameworks (Spring Boot, Primefaces, Dropwizard) to build robust and scalable backend systems.",
      "Crafted immersive user interfaces using Next.js and Nuxt.js, focusing on seamless user experiences.",
      "Collaborated with cross-functional teams to deliver high-quality software, meeting client requirements and deadlines.",
      "Debugged and troubleshot complex issues to ensure code quality and system stability."
    ],
    technologies: ['Node', 'Spring', 'Next', 'Nuxt'],
    icon: FaCode
  },
  {
    company: "AMS-Global.ai",
    position: "Software Engineer",
    duration: "April 2020 - June 2022",
    level: "Level 2",
    description: [
      "Developed and maintained high-performance front-end components using Vue.js and Nuxt.js, ensuring responsiveness and scalability.",
      "Architected efficient and secure RESTful APIs and GraphQL schemas using Nest.js and TypeScript.",
      "Optimized application performance through code refactoring and implementation of best practices."
    ],
    technologies: ['Vue', 'Nuxt', 'Node'],
    icon: FaServer
  },
  {
    company: "Modana",
    position: "Back End Developer",
    duration: "August 2019 - April 2020",
    level: "Level 1",
    description: [
      "Engineered robust backend services for a cutting-edge fintech startup.",
      "Implemented high-performance RESTful APIs using Node.js and Express.js.",
      "Utilized MongoDB for efficient data storage and retrieval.",
      "Collaborated with frontend developers to ensure seamless integration of backend services."
    ],
    technologies: ['Node'],
    icon: FaDatabase
  }
]

const PixelBox = ({ children, isExpanded }: { children: React.ReactNode; isExpanded: boolean }) => (
  <div className="relative">
    <div className={`absolute inset-0 bg-blue-500 blur transition-all duration-300 ${isExpanded ? 'opacity-50' : 'opacity-20'}`}></div>
    <div className={`relative bg-gray-900 border-2 transition-all duration-300 ${isExpanded ? 'border-purple-400' : 'border-blue-400'} p-4 shadow-lg`}>
      {children}
    </div>
  </div>
);


const ExperienceCard = ({ exp, index, isExpanded, toggleExpand }) => {
  return (
    <PixelBox isExpanded={isExpanded}>
      <motion.div
        className="cursor-pointer"
        onClick={toggleExpand}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold mb-1 text-blue-400 pixel-text">{exp.company}</h3>
          <exp.icon className="text-purple-500 text-2xl" />
        </div>
        <p className="text-sm text-blue-300 mb-2 pixel-text">{exp.duration}</p>
        <p className="text-xl mb-3 text-purple-500 pixel-text">{exp.position}</p>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, idx) => (
            <motion.span 
              key={idx} 
              className="px-2 py-1 bg-gray-800 text-blue-300 text-xs rounded pixel-box"
              whileHover={{ scale: 1.1, color: '#60A5FA' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              className="list-disc pl-5 mt-4 text-blue-300"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {exp.description.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="mb-1 text-sm pixel-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <motion.div
          className="mt-2 text-blue-400 font-semibold flex items-center justify-center"
          animate={{ rotateX: isExpanded ? 180 : 0 }}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </motion.div>
    </PixelBox>
  );
};

export default function WorkExperienceTree() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-16 relative z-10 font-gaming">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 pixel-text">Career Quest Log</h2>
      <div className="relative max-w-4xl mx-auto pl-4">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-400 pixel-border"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div 
              className="absolute -left-4 top-0 w-8 h-8 bg-blue-400 pixel-box flex items-center justify-center text-gray-900 font-bold z-10"
              whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(66, 153, 225, 0.6)' }}
            >
              {exp.level.split(' ')[1]}
            </motion.div>
            <div className="ml-8">
              <ExperienceCard 
                exp={exp} 
                index={index} 
                isExpanded={expandedIndex === index}
                toggleExpand={() => toggleExpand(index)}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .pixel-text {
          font-family: 'Press Start 2P', cursive;
          text-shadow: 2px 2px 0px rgba(0, 0, 255, 0.5);
        }
        .pixel-box {
          box-shadow: 0 0 0 2px #000, 0 0 0 4px #4299e1;
          image-rendering: pixelated;
        }
        .pixel-border {
          background: repeating-linear-gradient(
            to bottom,
            #4299e1,
            #4299e1 10px,
            #2b6cb0 10px,
            #2b6cb0 20px
          );
        }
      `}</style>
    </section>
  );
}