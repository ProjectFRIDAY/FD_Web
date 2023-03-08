import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop({ delay = 0 }) {
  const { pathname } = useRouter();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), delay);
  }, [pathname, delay]);

  return null;
}
