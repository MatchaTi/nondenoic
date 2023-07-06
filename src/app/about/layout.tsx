import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Nondenoic',
  description: 'Personal Blog',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section className='min-h-screen'>{children}</section>;
}
