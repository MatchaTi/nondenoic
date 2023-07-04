'use client';

import { ThemeProvider } from 'next-themes';

interface IProviders {
  children: React.ReactNode;
}

export default function Providers({ children }: IProviders) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
