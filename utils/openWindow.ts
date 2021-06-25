export const openWindow = (url: string): void => {
  if (typeof window === 'undefined') return;

  window.open(url, '_blank', 'noopener,noreferrer');
};
