import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ delay = 0 }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), delay);
  }, [pathname, delay]);

  return null;
}
