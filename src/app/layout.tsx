import Sidebar from '@/components/layout/sidebar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Nondenoic',
  description: 'Personal Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.className} dark min-h-screen bg-dark-base text-dark-text antialiased`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
