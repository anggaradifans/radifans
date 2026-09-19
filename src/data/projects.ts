export interface Project {
  title: string;
  category: 'FinTech' | 'Full-Stack';
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  repositoryVisibility?: 'public' | 'private';
  features: string[];
  highlights: string[];
  screenshots?: { src: string; alt: string; label: string }[];
  galleryLayout?: 'feature' | 'mosaic';
  signal: string;
  workflow?: { label: string; detail: string }[];
  workflowProof?: { src: string; alt: string; eyebrow: string; title: string; description: string };
}

export const projects: Project[] = [
  {
    title: 'Tilaka Tournament Generator',
    category: 'Full-Stack',
    description: 'Tournament manager for publishing group standings, match results, knockout brackets, and team rosters',
    signal: 'Public competition operations',
    longDescription: 'A full-stack tournament application built for the Tilaka office competition. It gives players a public place to follow tournament progress, recent results, group standings, the knockout bracket, participating teams, and the final champion. A separate admin area keeps tournament operations away from the public views.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://tnt-cup.kangoprek.my.id/',
    liveLabel: 'Open Office Cup',
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
    screenshots: [
      { src: '/images/office-cup-overview.webp', alt: 'Office Cup tournament overview showing the completed tournament and champion', label: 'Overview' },
      { src: '/images/office-cup-standings.webp', alt: 'Office Cup group standings table', label: 'Standings' },
      { src: '/images/office-cup-fixtures.webp', alt: 'Office Cup fixture results by matchday', label: 'Fixtures' },
      { src: '/images/office-cup-bracket.webp', alt: 'Office Cup knockout bracket', label: 'Bracket' },
    ],
  },
  {
    title: 'Telegram Financial Tracker',
    category: 'FinTech',
    description: 'Personal finance logger that processes routed transaction emails and lets me approve or reject each transaction from Telegram',
    signal: 'Email automation + human approval',
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
    workflow: [
      { label: 'Transaction email', detail: 'Incoming bank notification' },
      { label: 'Email Routing', detail: 'Cloudflare forwards the event' },
      { label: 'Worker', detail: 'Detects and parses transaction data' },
      { label: 'Pending record', detail: 'Supabase stores it for review' },
      { label: 'Telegram review', detail: 'Approve or reject from chat' },
      { label: 'Final ledger', detail: 'Confirmed record is retained' },
    ],
    workflowProof: {
      src: '/images/telegram-finance-confirmation.webp',
      alt: 'Redacted Telegram Financial Tracker messages showing confirmed saved transactions and monthly budget updates',
      eyebrow: 'Human-in-the-loop proof',
      title: 'Confirmation and budget feedback happen in Telegram',
      description: 'After a transaction is saved, the same conversation returns a concise confirmation and refreshed monthly budget status.',
    },
  },
  {
    title: 'Financial Tracker Dashboard',
    category: 'FinTech',
    description: 'Web-based dashboard for visualizing financial data from the Telegram Financial Tracker',
    signal: 'Financial analytics + live sync',
    longDescription: 'A modern React-based dashboard designed to interface with the Telegram Financial Tracker system. It provides users with deep insights into their financial health through interactive charts, transaction tables, and trend analysis, all synced in real-time with the Supabase backend.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Recharts', 'Supabase', 'TypeScript'],
    liveUrl: 'https://finance.radifans.my.id/demo',
    liveLabel: 'Try finance demo',
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
    galleryLayout: 'mosaic',
    screenshots: [
      { src: '/images/finance-dashboard-budget.webp', alt: 'Financial Tracker demo showing period filters, account summaries, and monthly budgets', label: 'Budgets' },
      { src: '/images/finance-dashboard-trends.webp', alt: 'Financial Tracker demo showing income and outcome trend charts', label: 'Trends' },
      { src: '/images/finance-dashboard-insights.webp', alt: 'Financial Tracker demo showing income and outcome category insights', label: 'Insights' },
      { src: '/images/finance-dashboard-ledger.webp', alt: 'Financial Tracker demo showing filters and a transaction ledger', label: 'Ledger' },
    ],
  },
];
