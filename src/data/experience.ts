export interface Experience {
  company: string;
  position: string;
  duration: string;
  level: number;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Tilaka Nusa Teknologi',
    position: 'Software Engineer',
    duration: 'July 2022 – Present',
    level: 3,
    description: [
      'Engineered and optimized existing products while contributing to new software delivery.',
      'Leveraged Node.js and Java-based frameworks (Spring Boot, Primefaces, Dropwizard) to build robust and scalable backend systems.',
      'Built user interfaces with Next.js and Nuxt.js, focusing on clear flows and responsive behavior.',
      'Collaborated with cross-functional teams to deliver high-quality software, meeting client requirements and deadlines.',
      'Debugged and troubleshot complex issues to ensure code quality and system stability.',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Java', 'React/Next.js', 'Vue/Nuxt.js', 'Spring Boot', 'Primefaces', 'Dropwizard', 'MySQL', 'MongoDB', 'Gitlab'],
  },
  {
    company: 'Arogya Mitra Sejati',
    position: 'Software Engineer',
    duration: 'April 2020 – June 2022',
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
    level: 1,
    description: [
      'Engineered backend services for a fintech startup.',
      'Implemented high-performance RESTful APIs using Node.js and Express.js.',
      'Utilized MongoDB for efficient data storage and retrieval.',
      'Collaborated with frontend developers to connect backend services to product screens.',
    ],
    technologies: ['Node.js', 'JavaScript', 'MongoDB', 'Gitlab'],
  },
];
