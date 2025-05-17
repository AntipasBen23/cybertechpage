import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CyberTechPage',
  description: 'Your company description here',
  keywords: 'technology, cyber, software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}