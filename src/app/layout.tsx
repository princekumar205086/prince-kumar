import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import NavbarPage from './(core)/(include)/navbar/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prince Kumar - Portfolio',
  description: 'Personal portfolio of Prince Kumar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This script prevents flash of incorrect theme */}
        <Script id="theme-check" strategy="beforeInteractive">
          {`
            (function() {
              // Check for saved theme
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // Set dark mode based on preference
              if (theme === 'dark' || (!theme && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })()
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <NavbarPage />
        {children}
      </body>
    </html>
  );
}