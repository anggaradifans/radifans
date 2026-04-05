export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
  /** Iconify icon id, e.g. 'logos:react' */
  icon: string;
  /** Optional: path to a local icon in /public, e.g. '/icons/activemq.svg'. Overrides Iconify. */
  localIcon?: string;
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'logos:react', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: 'logos:nextjs-icon', color: '#ffffff' },
  { name: 'Vue.js', category: 'Frontend', icon: 'logos:vue', color: '#4FC08D' },
  { name: 'TypeScript', category: 'Frontend', icon: 'logos:typescript-icon', color: '#3178C6' },
  { name: 'JavaScript', category: 'Frontend', icon: 'logos:javascript', color: '#F7DF1E' },
  { name: 'HTML5', category: 'Frontend', icon: 'logos:html-5', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', icon: 'logos:css-3', color: '#1572B6' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'logos:tailwindcss-icon', color: '#06B6D4' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'logos:nodejs-icon', color: '#339933' },
  { name: 'NestJS', category: 'Backend', icon: 'logos:nestjs', color: '#E0234E' },
  { name: 'Java', category: 'Backend', icon: 'logos:java', color: '#007396' },
  { name: 'Spring Boot', category: 'Backend', icon: 'logos:spring-icon', color: '#6DB33F' },
  { name: 'Python', category: 'Backend', icon: 'logos:python', color: '#3776AB' },
  { name: 'ActiveMQ', category: 'Backend', icon: 'simple-icons:apacheactivemq', localIcon: '/icons/activemq.svg', color: '#FF6B35' },

  // Database
  { name: 'MongoDB', category: 'Database', icon: 'logos:mongodb-icon', color: '#47A248' },
  { name: 'MySQL', category: 'Database', icon: 'logos:mysql-icon', color: '#4479A1' },
  { name: 'PostgreSQL', category: 'Database', icon: 'logos:postgresql', color: '#336791' },
  { name: 'Redis', category: 'Database', icon: 'logos:redis', color: '#DC382D' },

  // DevOps
  { name: 'Docker', category: 'DevOps', icon: 'logos:docker-icon', color: '#2496ED' },
  { name: 'AWS', category: 'DevOps', icon: 'logos:aws', color: '#FF9900' },

  // Tools
  { name: 'Git', category: 'Tools', icon: 'logos:git-icon', color: '#F05032' },
  { name: 'Jira', category: 'Tools', icon: 'logos:jira', color: '#0052CC' },
];

export const skillCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'] as const;
