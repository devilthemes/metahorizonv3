import { useState, useEffect, useCallback, useRef } from 'react';

interface UseDebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

/**
 * Custom hook to debounce a value
 * @param value - Value to debounce
 * @param delay - Debounce delay in milliseconds
 * @param options - Optional configuration
 * @returns Debounced value
 */
export function useDebounce<T>(
  value: T,
  delay: number,
  options: UseDebounceOptions = {}
): T {
  const { leading = false, trailing = true } = options;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Handle leading edge
    if (leading) {
      setDebouncedValue(value);
    }

    if (!trailing) {
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, leading, trailing]);

  return debouncedValue;
}

/**
 * Custom hook to debounce a function
 * @param fn - Function to debounce
 * @param delay - Debounce delay in milliseconds
 * @returns Debounced function
 */
export function useDebounceCallback<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  ) as T;

  return debouncedFn;
}
