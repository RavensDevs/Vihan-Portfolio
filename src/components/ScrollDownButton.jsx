import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * A floating scroll-down button that stays visible while scrolling
 * and hides when the user reaches the bottom of the page.
 */
export default function ScrollDownButton() {
  const { isDark } = useTheme();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Hide when within 100px of the bottom
      const atBottom = scrollTop + windowHeight >= docHeight - 100;
      setVisible(!atBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollDown}
      aria-label="Scroll down"
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 transition-all duration-500 ${
        visible
          ? 'opacity-40 hover:opacity-80 translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-4'
      }`}
    >
      <span
        className={`text-xs tracking-widest uppercase font-mono ${
          isDark ? 'text-on-surface-variant' : 'text-gray-500'
        }`}
      >
        Scroll
      </span>
      <ChevronDown
        size={20}
        className={`animate-bounce ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}
      />
    </button>
  );
}
