import { useSyncExternalStore } from 'react';

function subscribe(query: MediaQueryList, callback: () => void) {
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function getMatch(queryString: string): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia(queryString).matches;
}

export function useMediaQuery(queryString: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window.matchMedia !== 'function') {
        return () => undefined;
      }
      const query = window.matchMedia(queryString);
      return subscribe(query, callback);
    },
    () => getMatch(queryString),
    () => false,
  );
}
