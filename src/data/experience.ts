export interface Experience {
  company: string;
  position: string;
  duration: string;
  overview: string;
  level: number;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Tilaka Nusa Teknologi',
    position: 'Software Engineer',
    duration: 'July 2022 – Present',
    overview: 'Building digital trust infrastructure for identity verification, electronic signatures, and compliance workflows.',
    level: 4,
    description: [
      'Built scalable backend microservices with Node.js, Java-based frameworks (Spring Boot, Primefaces, Dropwizard), and Golang to handle high-concurrency workloads.',
      'Implemented asynchronous messaging with ActiveMQ and Redis caching to improve throughput and response times.',
      'Built user interfaces with Next.js and Nuxt.js, focusing on clear flows and responsive behavior.',
      'Automated repetitive operational and data-processing tasks with Python scripting.',
      'Integrated third-party APIs with attention to authentication and data handling, working with cross-functional teams to meet delivery dates.',
      'Used AI-assisted development tools (Claude Code, Codex, Antigravity, Cursor) day to day for prototyping, code review, and refactoring.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Java', 'Golang', 'Python', 'React/Next.js', 'Vue/Nuxt.js', 'Spring Boot', 'Primefaces', 'Dropwizard', 'ActiveMQ', 'Redis', 'MySQL', 'MongoDB', 'Gitlab', 'Claude Code', 'Codex', 'Antigravity', 'Cursor'],
  },
  {
    company: 'Tilaka Nusa Teknologi',
    position: 'Frontend Developer (Freelance)',
    duration: 'December 2021 – July 2022',
    overview: 'Building digital trust infrastructure for identity verification, electronic signatures, and compliance workflows.',
    level: 3,
    description: [
      'Built dashboard applications with Nuxt.js, turning design mockups into responsive, reusable components.',
      'Maintained and extended existing Next.js codebases, improving consistency across the product suite.',
      'Worked with backend engineers to integrate REST APIs and keep the UI in sync with evolving services.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Vue/Nuxt.js', 'React/Next.js', 'Gitlab'],
  },
  {
    company: 'Arogya Mitra Sejati',
    position: 'Software Engineer',
    duration: 'April 2020 – June 2022',
    overview: 'Building AI-enabled healthcare supply-chain and hospital operations tools.',
    level: 2,
    description: [
      'Developed and maintained high-performance front-end components using Vue.js and Nuxt.js, ensuring responsiveness and scalability.',
      'Architected efficient and secure RESTful APIs and GraphQL schemas using Nest.js and TypeScript.',
      'Optimized application performance through code refactoring and implementation of best practices.',
    ],
    technologies: ['Vue/Nuxt.js', 'Node.js', 'JavaScript', 'TypeScript', 'Nest.js', 'GraphQL', 'MySQL', 'Gitlab'],
  },
  {
    company: 'Modana',
    position: 'Back End Developer',
    duration: 'August 2019 – April 2020',
    overview: 'Building HR, payroll, and lending tools that connect businesses with employees.',
    level: 1,
    description: [
      'Engineered backend services for a fintech startup.',
      'Implemented high-performance RESTful APIs using Node.js and Express.js.',
      'Utilized MongoDB for efficient data storage and retrieval.',
      'Collaborated with frontend developers to connect backend services to product screens.',
    ],
    technologies: ['Node.js', 'JavaScript', 'Express.js', 'MongoDB', 'Gitlab'],
  },
];
