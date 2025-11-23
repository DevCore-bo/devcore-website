// src/utils/ScrollTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
  
    setTimeout(() => {
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' 
        });
      }
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;