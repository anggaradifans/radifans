export interface Project {
  title: string;
  category: 'FinTech' | 'Full-Stack';
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  repositoryVisibility?: 'public' | 'private';
  features: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: 'Tilaka Tournament Generator',
    category: 'Full-Stack',
    description: 'Tournament manager for publishing group standings, match results, knockout brackets, and team rosters',
    longDescription: 'A full-stack tournament application built for the Tilaka office competition. It gives players a public place to follow tournament progress, recent results, group standings, the knockout bracket, participating teams, and the final champion. A separate admin area keeps tournament operations away from the public views.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://tnt-cup.kangoprek.my.id/',
    repositoryVisibility: 'private',
    features: [
      'Public tournament overview with status and champion',
      'Group standings',
      'Match schedule and results',
      'Knockout bracket',
      'Team roster pages',
      'Separate admin area',
    ],
    highlights: [
      'Used for a completed Tilaka office tournament',
      'One public view for the full tournament progress',
      'Production code maintained in a private repository',
    ],
  },
  {
    title: 'Telegram Financial Tracker',
    category: 'FinTech',
    description: 'Personal finance logger that processes routed transaction emails and lets me approve or reject each transaction from Telegram',
    longDescription: 'An automated finance workflow that handles transactions from Telegram messages and incoming emails. Cloudflare Email Routing forwards transaction emails to a Worker, which detects the transaction, passes its data to Supabase, and sends an approval request through a Telegram webhook. I can approve or reject the transaction directly from Telegram.',
    technologies: ['TypeScript', 'Cloudflare Workers', 'Cloudflare Email Routing', 'Supabase', 'Telegram Bot API', 'PostgreSQL', 'Edge Functions', 'Deno'],
    githubUrl: 'https://github.com/anggaradifans/supabase-telegram-webhook',
    features: [
      'Natural language transaction parsing',
      'Transaction email detection through Cloudflare Email Routing',
      'Email processing with Cloudflare Workers',
      'Supabase transaction storage',
      'Approve or reject transactions from Telegram',
      'Timezone-aware logging (Asia/Jakarta)',
      'Category and account auto-creation',
    ],
    highlights: [
      'Email-to-database workflow with Telegram confirmation',
      'Human approval step for automatically detected transactions',
      'Telegram interface for transaction entry and review',
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
