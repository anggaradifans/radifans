import { Metadata } from 'next'
import Script from 'next/script'

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

// Structured Data for Portfolio
export const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Angga Radifan Sumarna",
  "alternateName": "Angga Radifan",
  "description": "Senior Software Engineer with 4+ years of experience specializing in React, Next.js, Node.js, and TypeScript",
  "url": "https://radifans.vercel.app",
  "sameAs": [
    "https://github.com/anggaradifans",
    "https://www.linkedin.com/in/anggaradifans/"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Tilaka Nusa Teknologi"
  },
  "alumniOf": "Computer Science",
  "knowsAbout": [
    "React",
    "Next.js", 
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Full-Stack Development",
    "Software Engineering"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Software Engineer",
      "credentialCategory": "Professional Experience",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Tilaka Nusa Teknologi"
      }
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Full-Stack Web Development",
        "description": "Professional web application development using modern technologies"
      }
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Service",
        "name": "React Development",
        "description": "Frontend development with React and Next.js"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service", 
        "name": "Backend API Development",
        "description": "Server-side development with Node.js and Java"
      }
    }
  ]
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Angga Radifan Sumarna - Portfolio",
  "description": "Full-Stack Software Engineer Portfolio",
  "url": "https://radifans.vercel.app",
  "author": {
    "@type": "Person",
    "name": "Angga Radifan Sumarna"
  },
  "inLanguage": "en-US",
  "copyrightHolder": {
    "@type": "Person",
    "name": "Angga Radifan Sumarna"
  },
  "dateModified": new Date().toISOString().split('T')[0]
};

// Projects structured data
export const projectsStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "E-Commerce Marketplace Platform",
    "description": "Full-featured marketplace with modern UI, product catalog, and responsive design built with Next.js",
    "url": "https://marketplace-app-taupe.vercel.app/",
    "author": {
      "@type": "Person",
      "name": "Angga Radifan Sumarna"
    },
    "programmingLanguage": ["TypeScript", "JavaScript"],
    "runtimePlatform": "Next.js",
    "operatingSystem": "Web Browser",
    "applicationCategory": "WebApplication"
  },
  {
    "@context": "https://schema.org", 
    "@type": "SoftwareApplication",
    "name": "Telegram Financial Tracker",
    "description": "Innovative personal finance logger using Telegram bot integration with Supabase backend and natural language processing",
    "author": {
      "@type": "Person", 
      "name": "Angga Radifan Sumarna"
    },
    "programmingLanguage": ["TypeScript"],
    "runtimePlatform": "Supabase Edge Functions", 
    "operatingSystem": "Telegram Bot",
    "applicationCategory": "FinanceApplication"
  }
];

export default function SEOComponent() {
  return (
    <>
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData),
        }}
      />
    </>
  );
}
