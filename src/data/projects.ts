export interface Project {
  title: string;
  category: 'E-Commerce' | 'FinTech' | 'Full-Stack';
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  features: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Marketplace Platform',
    category: 'E-Commerce',
    description: 'Full-featured marketplace with modern UI, product catalog, and responsive design built with Next.js',
    longDescription: 'A comprehensive e-commerce marketplace platform showcasing modern web development practices. Features a clean, responsive design with advanced product catalog management, search functionality, and optimized performance. Built with Next.js and TypeScript, deployed on Vercel with seamless user experience across all devices.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'React'],
    liveUrl: 'https://marketplace-app-taupe.vercel.app/',
    githubUrl: 'https://github.com/anggaradifans/marketplace-app',
    features: [
      'Modern responsive design with Tailwind CSS',
      'Product catalog with advanced filtering',
      'Search functionality with real-time results',
      'Optimized performance and SEO',
      'Mobile-first responsive design',
      'Clean, intuitive user interface',
    ],
    highlights: [
      'Production-ready deployment on Vercel',
      'TypeScript for type safety',
      'Modern React patterns and hooks',
    ],
  },
  {
    title: 'Telegram Financial Tracker',
    category: 'FinTech',
    description: 'Innovative personal finance logger using Telegram bot integration with Supabase backend and natural language processing',
    longDescription: 'A creative financial tracking solution that transforms how users log their expenses and income. Uses Telegram bot for natural language input processing, automatically parsing transaction details and storing them in Supabase. Features timezone-aware logging, automated categorization, and real-time database integration with comprehensive error handling.',
    technologies: ['TypeScript', 'Supabase', 'Telegram Bot API', 'PostgreSQL', 'Edge Functions', 'Deno'],
    githubUrl: 'https://github.com/anggaradifans/supabase-telegram-webhook',
    features: [
      'Natural language transaction parsing',
      'Real-time Supabase database integration',
      'Timezone-aware logging (Asia/Jakarta)',
      'Automated webhook management',
      'Category and account auto-creation',
      'Secure bot token authentication',
      'Comprehensive error handling and logging',
    ],
    highlights: [
      'Innovative use of Telegram as UI interface',
      'Complex timezone handling and parsing logic',
      'Production-ready webhook integration',
    ],
  },
  {
    title: 'Financial Tracker Dashboard',
    category: 'FinTech',
    description: 'Web-based dashboard for visualizing financial data from the Telegram Financial Tracker',
    longDescription: 'A modern React-based dashboard designed to interface with the Telegram Financial Tracker system. It provides users with deep insights into their financial health through interactive charts, transaction tables, and trend analysis, all synced in real-time with the Supabase backend.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Recharts', 'Supabase', 'TypeScript'],
    githubUrl: 'https://github.com/anggaradifans/financial-tracker-dashboard',
    features: [
      'Interactive spending visualizations',
      'Detailed transaction history',
      'Real-time data synchronization',
      'Expense categorization management',
      'Monthly and yearly reports',
      'Responsive dashboard layout',
    ],
    highlights: [
      'Seamless integration with Telegram bot data',
      'Advanced charting and analytics',
      'Modern dashboard UI patterns',
    ],
  },
];
