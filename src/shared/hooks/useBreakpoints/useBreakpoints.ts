import { useEffect, useState } from 'react';

type WindowSizeT = {
    width: number | undefined,
    height: number | undefined,
};

export enum breakpoins {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
};  

export const useBreakpoints = () => {
    const [breakpoint, setBreakPoint] = useState('');
    const [windowSize, setWindowSize] = useState<WindowSizeT>({
      width: undefined,
      height: undefined,
    });
  
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
  
      if (0 < windowSize.width && windowSize.width < 600) {
        setBreakPoint(breakpoins.XS);
      }
      if (600 < windowSize.width && windowSize.width < 960) {
        setBreakPoint(breakpoins.SM);
      }
      if (960 < windowSize.width && windowSize.width < 1280) {
        setBreakPoint(breakpoins.MD);
      }
      if (1280 < windowSize.width && windowSize.width < 1920) {
        setBreakPoint(breakpoins.LG);
      }
      if (windowSize.width >= 1920) {
        setBreakPoint(breakpoins.XL);
      }
  
      return () => window.removeEventListener('resize', handleResize);
    }, [windowSize.width]);
    return breakpoint;
  };