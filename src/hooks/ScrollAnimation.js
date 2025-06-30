import { useEffect } from 'react';

const ScrollAnimation = (ref, { threshold = 0.3, immediate = false, customClass = '' } = {}) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hiddenClass = customClass ? `hidden-${customClass}` : 'hidden';
    const showClass = customClass ? `show-${customClass}` : 'show';

    el.classList.add(hiddenClass);

    if (immediate) {
      setTimeout(() => {
        el.classList.add(showClass);
      }, 100);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(showClass);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [ref, threshold, immediate, customClass]);
}

export default ScrollAnimation;