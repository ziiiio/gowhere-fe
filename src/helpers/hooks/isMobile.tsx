import { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '../../libs/constants';

// source: https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
export const useIsMobileView = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  // LifeSg app will always be mobile
  const isMobile = width <= MOBILE_WIDTH;

  return {
    isMobile,
  };
};
