'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaVuejs, FaJava, 
  FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt,
  FaJs, FaPython, FaJira, FaExchangeAlt
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiTailwindcss } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#000000' },
  { name: 'Vue.js', icon: FaVuejs, category: 'Frontend', color: '#4FC08D' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, category: 'Frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },

  // Backend
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: '#339933' },
  { name: 'NestJS', icon: SiNestjs, category: 'Backend', color: '#E0234E' },
  { name: 'Java', icon: FaJava, category: 'Backend', color: '#007396' },
  { name: 'Spring Boot', icon: SiSpringboot, category: 'Backend', color: '#6DB33F' },
  { name: 'Python', icon: FaPython, category: 'Backend', color: '#3776AB' },
  { name: 'ActiveMQ', icon: FaExchangeAlt, category: 'Backend', color: '#FF6B35' },

  // Database
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, category: 'Database', color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#336791' },
  { name: 'Redis', icon: SiRedis, category: 'Database', color: '#DC382D' },

  // DevOps & Cloud
  { name: 'Docker', icon: FaDocker, category: 'DevOps', color: '#2496ED' },
  { name: 'AWS', icon: FaAws, category: 'DevOps', color: '#232F3E' },

  // Tools
  { name: 'Git', icon: FaGitAlt, category: 'Tools', color: '#F05032' },
  { name: 'Jira', icon: FaJira, category: 'Tools', color: '#0052CC' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-70 rounded-lg p-4 border border-blue-500"
      whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 100, 255, 0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-3">
        <Icon className="w-6 h-6" style={{ color: skill.color }} />
        <h3 className="text-lg font-semibold text-blue-400">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

  return (
    <section className="mb-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Skills & Technologies</h2>
      
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .skill-card {
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
} 