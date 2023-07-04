'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Button from './button';

interface IDarkMode {
  className?: string;
  visibility?: string;
}

export default function DarkModeBtn({ className, visibility }: IDarkMode) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Button
      type='button'
      className={className}
      visibility={visibility}
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
    >
      {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
    </Button>
  );
}
