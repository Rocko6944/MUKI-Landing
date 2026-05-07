const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle('scrolled', window.scrollY > 24);
};

const closeMenu = () => {
  if (!menuToggle || !mainNav) {
    return;
  }

  menuToggle.classList.remove('open');
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');
    mainNav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((element) => observer.observe(element));
} else {
  fadeElements.forEach((element) => element.classList.add('visible'));
}

window.addEventListener('scroll', syncHeaderState, { passive: true });
window.addEventListener('load', syncHeaderState);
