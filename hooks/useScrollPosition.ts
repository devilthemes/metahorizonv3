import { useState, useEffect, useRef, useCallback } from 'react';

interface UseScrollPositionOptions {
  throttleMs?: number;
}

/**
 * Custom hook to track scroll position
 * @param options - Optional configuration
 * @returns Current scroll position { x, y }
 */
export function useScrollPosition(
  options: UseScrollPositionOptions = {}
): { x: number; y: number } {
  const { throttleMs = 100 } = options;
  const [scrollPosition, setScrollPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setScrollPosition({
          x: window.scrollX,
          y: window.scrollY,
        });
      }, throttleMs);
    };

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttleMs]);

  return scrollPosition;
}

/**
 * Hook to check if user has scrolled past a threshold
 * @param threshold - Scroll threshold in pixels
 * @returns Boolean indicating if scrolled past threshold
 */
export function useScrolled(threshold: number = 100): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}

/**
 * Hook to scroll to top with smooth behavior
 */
export function useScrollToTop() {
  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return scrollToTop;
}
