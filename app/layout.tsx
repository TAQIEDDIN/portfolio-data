import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/icons/logo.svg',
    apple: '/icons/apple-touch-icon.png', // Assumes file exists in /public
    shortcut: '/icons/favicon.ico', // Assumes file exists in /public
  },
  title: {
    default: 'Anass El Hannaoui | Cloud & AI Enthusiast',
    template: '%s | Anass El Hannaoui',
  },
  description: 'Computer science student passionate about Cloud, DevOps, and AI. Building skills through real projects in machine learning, scalable systems, and full-stack development.',
  keywords: [
    'Cloud Computing',
    'DevOps Automation',
    'Machine Learning',
    'AI Engineer',
    'Full Stack Developer',
    'Docker',
    'Kubernetes',
    'Spring Boot',
    'Next.js Portfolio',
    'Anass El Hannaoui',
  ],
  authors: [{ name: 'Taqi eddine El mamouni', url: 'https://aelhannaoui-portfolio.vercel.app' }],
  creator: 'Anass El Hannaoui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aelhannaoui-portfolio.vercel.app',
    title: 'Anass El Hannaoui | Cloud & AI Engineer',
    description: 'Cloud & AI enthusiast exploring DevOps, scalable systems, and ML projects.',
    siteName: 'Anass El Hannaoui',
    images: [
      {
        url: '/og-image.webp', // Assumes optimized image exists in /public
        width: 1200,
        height: 630,
        alt: 'Anass El Hannaoui Portfolio',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taqi eddine El mamouni | Cloud & AI Enthusiast',
    description: 'AI Engineer exploring DevOps, scalable systems, and ML projects.',
    images: ['/og-image.webp'], // Assumes optimized image exists in /public
    creator: '@yourtwitterhandle', // Replace with your actual Twitter handle
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
  alternates: {
    canonical: 'https://aelhannaoui-portfolio.vercel.app', // Canonical URL for SEO
  },
};

export default function RootLayout({
  children,
  hideNavbar = false,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth motion-reduce:scroll-auto"
    >
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2" // Assumes font file exists or is handled by next/font
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="absolute left-0 top-0 z-50 p-2 text-foreground bg-background opacity-0 focus:opacity-100 focus:outline-none"
          >
            Skip to content
          </a>
          {!hideNavbar && (
            <header role="banner">
              <Navbar />
            </header>
          )}
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
<main id="main-content" role="main" className="min-h-screen bg-background">
                {children}
              <Analytics />
            </main>
          </Suspense>
          {!hideFooter && (
            <footer role="contentinfo">
              <Footer />
            </footer>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}