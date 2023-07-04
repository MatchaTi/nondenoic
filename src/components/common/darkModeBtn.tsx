'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Button from './button';

interface IDarkMode {
  visibility?: string;
}

export default function DarkModeBtn({ visibility }: IDarkMode) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Button type='button' visibility={visibility} onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
      {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
    </Button>
  );
}
