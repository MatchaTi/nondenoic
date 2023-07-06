import BlurBlob from '@/components/common/blurBlob';
import Footer from '@/components/layout/footer';
import GridBg from '@/components/layout/gridBg';
import Sidebar from '@/components/layout/sidebar';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Nondenoic',
  description: 'Personal Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-base min-h-screen text-light-text dark:text-dark-text`}>
        <Providers>
          <BlurBlob />
          <GridBg />
          <Sidebar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
