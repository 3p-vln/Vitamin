import { getElements } from '../composables/use-call-dom.ts';

export type LazyModule = {
  importFn: () => Promise<{ default: () => Promise<void> | void }>;
  selector: string;
};

export function useLoadFunction(importFn: LazyModule['importFn'], selector: string): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) return;

  const observer = new IntersectionObserver(
    async (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          try {
            const module = await importFn();
            await module.default();
          } catch (error) {
            console.error(`Ошибка загрузки модуля для ${selector}:`, error);
          }
        }
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
}

export function lazyImg() {
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = getElements<HTMLImageElement>('img.lazy');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '100px',
      }
    );

    lazyImages.forEach((img) => observer.observe(img));
  });
}
