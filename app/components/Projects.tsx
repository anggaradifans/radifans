'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe, Bot, ShoppingCart, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  features: string[];
  category: 'E-Commerce' | 'FinTech' | 'Full-Stack';
  icon: React.ElementType;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce Marketplace Platform",
    description: "Full-featured marketplace with modern UI, product catalog, and responsive design built with Next.js",
    longDescription: "A comprehensive e-commerce marketplace platform showcasing modern web development practices. Features a clean, responsive design with advanced product catalog management, search functionality, and optimized performance. Built with Next.js and TypeScript, deployed on Vercel with seamless user experience across all devices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
    liveUrl: "https://marketplace-app-taupe.vercel.app/",
    githubUrl: "https://github.com/anggaradifans/marketplace-app",
    features: [
      "Modern responsive design with Tailwind CSS",
      "Product catalog with advanced filtering",
      "Search functionality with real-time results", 
      "Optimized performance and SEO",
      "Mobile-first responsive design",
      "Clean, intuitive user interface"
    ],
    category: "E-Commerce",
    icon: ShoppingCart,
    highlights: [
      "Production-ready deployment on Vercel",
      "TypeScript for type safety",
      "Modern React patterns and hooks"
    ]
  },
  {
    title: "Telegram Financial Tracker",
    description: "Innovative personal finance logger using Telegram bot integration with Supabase backend and natural language processing",
    longDescription: "A creative financial tracking solution that transforms how users log their expenses and income. Uses Telegram bot for natural language input processing, automatically parsing transaction details and storing them in Supabase. Features timezone-aware logging, automated categorization, and real-time database integration with comprehensive error handling.",
    technologies: ["TypeScript", "Supabase", "Telegram Bot API", "PostgreSQL", "Edge Functions", "Deno"],
    githubUrl: "https://github.com/anggaradifans/supabase-telegram-webhook",
    features: [
      "Natural language transaction parsing",
      "Real-time Supabase database integration",
      "Timezone-aware logging (Asia/Jakarta)",
      "Automated webhook management",
      "Category and account auto-creation",
      "Secure bot token authentication",
      "Comprehensive error handling and logging"
    ],
    category: "FinTech",
    icon: Bot,
    highlights: [
      "Innovative use of Telegram as UI interface",
      "Complex timezone handling and parsing logic",
      "Production-ready webhook integration"
    ]
  }
];

const ProjectCard: React.FC<{ project: Project; index: number; isExpanded: boolean; onToggle: () => void }> = ({ 
  project, 
  index, 
  isExpanded, 
  onToggle 
}) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      className="bg-gray-900 bg-opacity-70 rounded-lg border border-blue-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg">
              <IconComponent className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
              <span className="text-sm text-purple-400 font-semibold">{project.category}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500 bg-opacity-20 rounded-lg text-green-400 hover:bg-opacity-30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-500 bg-opacity-20 rounded-lg text-gray-400 hover:bg-opacity-30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        <p className="text-blue-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-blue-300 text-sm rounded-full border border-blue-500"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.button
          onClick={onToggle}
          className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center space-x-1"
          whileHover={{ x: 5 }}
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp className="w-4 h-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-blue-500 border-opacity-30"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Project Details</h4>
                  <p className="text-blue-300 text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="text-blue-300 text-sm flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Code className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Technical Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="text-green-400 text-sm flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Globe className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="mb-16 relative">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">Featured Projects</h2>
        <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
          Showcasing innovative solutions and technical expertise through real-world applications
        </p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            isExpanded={expandedProject === index}
            onToggle={() => toggleProject(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .project-card {
          transition: all 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
