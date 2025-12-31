import './globals.css'
import { Ubuntu } from 'next/font/google'
import NavBar from './components/Navbar'
import GameBackground from './components/backgrounds/GameBackground'
import SEOComponent from './components/SEO'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata = {
  metadataBase: new URL('https://radifans.my.id'),
  title: {
    default: 'Angga Radifan Sumarna - Senior Software Engineer | React, Node.js, TypeScript',
    template: '%s | Angga Radifan Sumarna'
  },
  description: 'Full-Stack Software Engineer with 4+ years of experience specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications for fintech, healthcare, and e-commerce domains.',
  keywords: ['Software Engineer', 'React Developer', 'Node.js', 'TypeScript', 'Full-Stack Developer', 'Next.js', 'Java Spring Boot', 'Supabase', 'Telegram Bot', 'Frontend Developer', 'Backend Developer', 'Web Developer'],
  authors: [{ name: 'Angga Radifan Sumarna', url: 'https://radifans.my.id' }],
  creator: 'Angga Radifan Sumarna',
  publisher: 'Angga Radifan Sumarna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Angga Radifan Sumarna - Software Engineer Portfolio',
    description: 'Full-Stack Software Engineer specializing in modern web technologies with proven track record in fintech and e-commerce projects.',
    url: 'https://radifans.my.id',
    siteName: 'Angga Radifan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://radifans.my.id/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Angga Radifan Sumarna - Software Engineer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angga Radifan Sumarna - Software Engineer',
    description: 'Full-Stack Software Engineer | React, Node.js, TypeScript Expert',
    creator: '@anggaradifans', // Update with your Twitter handle if you have one
    images: ['https://radifans.my.id/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you set up Google Search Console
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  classification: 'Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://geistfont.vercel.app/geist.css" />
        <link rel="canonical" href="https://radifans.my.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://geistfont.vercel.app" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={`${ubuntu.variable} font-mono`}>
        <SEOComponent />
        <NavBar />
        <GameBackground />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
