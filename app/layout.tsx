import './globals.css'
import NavBar from './components/Navbar'  // Adjust the import path as needed
import GameBackground from './components/backgrounds/GameBackground'
import SEOComponent from './components/SEO'

export const metadata = {
  metadataBase: new URL('https://radifans.vercel.app'),
  title: {
    default: 'Angga Radifan Sumarna - Senior Software Engineer | React, Node.js, TypeScript',
    template: '%s | Angga Radifan Sumarna'
  },
  description: 'Full-Stack Software Engineer with 4+ years of experience specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications for fintech, healthcare, and e-commerce domains.',
  keywords: ['Software Engineer', 'React Developer', 'Node.js', 'TypeScript', 'Full-Stack Developer', 'Next.js', 'Java Spring Boot', 'Supabase', 'Telegram Bot', 'Frontend Developer', 'Backend Developer', 'Web Developer'],
  authors: [{ name: 'Angga Radifan Sumarna', url: 'https://radifans.vercel.app' }],
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
    url: 'https://radifans.vercel.app',
    siteName: 'Angga Radifan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://radifans.vercel.app/og-image.jpg', // You'll need to create this
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
    images: ['https://radifans.vercel.app/og-image.jpg']
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
        <link rel="canonical" href="https://radifans.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://geistfont.vercel.app" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className="font-mono">
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