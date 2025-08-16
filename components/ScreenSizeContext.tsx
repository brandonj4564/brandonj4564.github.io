'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

// Define the context type
interface ScreenSizeContextType {
  isMobile: boolean;
  isTablet: boolean;
}

const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

export function ScreenSizeProvider({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const mediaQueryMobile = useMediaQuery('(max-width: 48em)'); // sm
  const mediaQueryTablet = useMediaQuery('(max-width: 74em)'); // lg

  useEffect(() => {
    if (hasMounted) {
      setIsMobile(mediaQueryMobile ?? false);
      setIsTablet(mediaQueryTablet ?? false);
    }
  }, [mediaQueryMobile, mediaQueryTablet, hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return <ScreenSizeContext.Provider value={{ isMobile, isTablet }}>{children}</ScreenSizeContext.Provider>;
}

export function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }
  return context;
}
