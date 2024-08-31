// app/components/WorkExperience.tsx
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import TechStackIcons from './TechStackIcons'

const experiences = [
  {
    company: "Tilaka.id",
    position: "Software Engineer",
    duration: "July 2022 - Present",
    description: [
      "Maintained and enhanced existing products while also contributing to the development of new products in Tilaka.",
      "Utilized Node.js and Java-based frameworks (Spring Boot, Primefaces, Dropwizard) for backend development, ensuring robust and scalable solutions.",
      "Employed Next.js and Nuxt.js for frontend development, focusing on intuitive user interfaces and seamless user experiences.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions meeting client requirements and deadlines.",
      "Participated in debugging, and troubleshooting to ensure code quality and system stability."
    ],
    technologies: ['Node', 'Spring', 'Next', 'Nuxt']
  },
  {
    company: "AMS-Global.ai (Arogya Mitra Sejati)",
    position: "Software Engineer",
    duration: "April 2020 - June 2022",
    description: [
      "Developed and maintained robust front-end components and features using Vue.js and Nuxt.js, ensuring high performance, responsiveness, and scalability.",
      "Designed and implemented efficient and secure RESTful APIs and GraphQL schemas using Nest.js and TypeScript to support front-end functionalities and data retrieval.",
      "Optimized application performance and user experience through code refactoring, performance tuning, and other best practices."
    ],
    technologies: ['Vue', 'Nuxt', 'Node']
  },
  {
    company: "Modana",
    position: "Back End Developer",
    duration: "August 2019 - April 2020",
    description: [
      "Developed and maintained backend services for a fintech startup.",
      "Implemented RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB for data storage and retrieval.",
      "Collaborated with frontend developers to ensure smooth integration of backend services."
    ],
    technologies: ['Node']
  }
]

export default function WorkExperienceTree() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="mb-16 relative z-10 font-mono">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-700">Work Experience</h2>
      <div className="relative max-w-4xl mx-auto pl-4">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-700"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute -left-4 top-0 w-4 h-4 bg-black border-4 border-green-400 rounded-full mt-1.5 z-10"></div>
            <div className="ml-6">
              <motion.div
                className={`bg-black bg-opacity-70 p-6 rounded-lg shadow-lg border-l-4 ${
                  index === 0 ? 'border-green-400' : 'border-green-600'
                } cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-green-400/20`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold mb-1 text-green-400">{exp.company}</h3>
                <p className="text-sm text-green-300 mb-2">{exp.duration}</p>
                <p className="text-xl mb-3 text-green-500">{exp.position}</p>
                <TechStackIcons technologies={exp.technologies} />
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.ul
                      className="list-disc pl-5 mt-4 text-green-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="mb-1 text-sm">{item}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <motion.div
                  className="mt-2 text-green-400 font-semibold"
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                >
                  {expandedIndex === index ? '▲' : '▼'}
                </motion.div>
              </motion.div>
              {index < experiences.length - 1 && (
                <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-700"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}