import { useState, useEffect } from 'react';

interface UseMediaQueryOptions {
  defaultValue?: boolean;
}

/**
 * Custom hook to check if a media query matches
 * @param query - Media query string (e.g., '(min-width: 768px)')
 * @param options - Optional configuration
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(
  query: string,
  options: UseMediaQueryOptions = {}
): boolean {
  const { defaultValue = false } = options;
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    // Check if matchMedia is supported (SSR safety)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * Predefined breakpoint hooks
 */
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsSm = () => useMediaQuery('(min-width: 640px)');
export const useIsMd = () => useMediaQuery('(min-width: 768px)');
export const useIsLg = () => useMediaQuery('(min-width: 1024px)');
export const useIsXl = () => useMediaQuery('(min-width: 1280px)');
export const useIsXxl = () => useMediaQuery('(min-width: 1536px)');
