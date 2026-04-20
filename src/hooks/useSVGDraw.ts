import { useEffect } from 'react';

export function useSVGDraw() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textEl = entry.target.querySelector('.svg-draw-text');
            if (textEl) {
              textEl.classList.add('drawn');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const containers = document.querySelectorAll('.svg-draw-text');
    containers.forEach((el) => {
      // Observe the parent of the SVG text element
      const parent = el.closest('svg');
      if (parent) {
        observer.observe(parent);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
