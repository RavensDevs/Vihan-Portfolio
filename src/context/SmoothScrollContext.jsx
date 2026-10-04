import { createContext, useCallback, useContext } from 'react';

const SmoothScrollContext = createContext(null);

export function SmoothScrollProvider({ children }) {
  const scrollTo = useCallback((target, options = {}) => {
    const behavior = options.immediate ? 'instant' : 'smooth';
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior });
    } else {
      target?.scrollIntoView({ behavior });
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={scrollTo}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext) ?? ((target, options) => {
    const behavior = options?.immediate ? 'instant' : 'smooth';
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior });
    } else {
      target?.scrollIntoView({ behavior });
    }
  });
}
