import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../context/SmoothScrollContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const scrollTo = useSmoothScroll();

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useLayoutEffect(() => {
    scrollTo(0, { immediate: true });
  }, [pathname, scrollTo]);

  return null;
}
