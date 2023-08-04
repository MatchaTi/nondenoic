import Footer from '@/components/layout/footer';
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
    <html lang='en'>
      <body className={`${inter.className} px-3 antialiased`}>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
