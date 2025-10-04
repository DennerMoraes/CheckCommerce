export function initScrollAnimation() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 150;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
}