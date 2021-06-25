/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react';

type Cache = {
  subscribers: number;
  value: unknown;
};

const cache = new Map<string, Cache>();

export const useGlobalMemo = <T extends unknown>(
  getter: () => T,
  cacheKey: string,
): T => {
  if (!cache.has(cacheKey)) {
    cache.set(cacheKey, {
      subscribers: 0,
      value: getter(),
    });
  }

  useEffect(() => {
    const currentCache = cache.get(cacheKey);
    if (!currentCache) return;

    currentCache.subscribers += 1;

    return () => {
      currentCache.subscribers -= 1;

      if (currentCache.subscribers <= 0) {
        cache.delete(cacheKey);
      }
    };
  }, [cacheKey]);

  return cache.get(cacheKey)?.value as T;
};
