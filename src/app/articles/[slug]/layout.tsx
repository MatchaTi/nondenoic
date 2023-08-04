import GridBg from '@/components/layout/gridBg';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GridBg full />
      {children}
    </div>
  );
}
