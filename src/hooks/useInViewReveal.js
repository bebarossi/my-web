import { useEffect, useRef } from 'react';

export function useInViewReveal({ selector, threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = selector
      ? container.querySelectorAll(selector)
      : [container];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, rootMargin]);

  return containerRef;
}
