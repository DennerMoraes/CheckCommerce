export function initHeaderMenu() {
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const navHeader = document.querySelector('.nav-header');

  if (!menuToggleBtn || !navHeader) return;

  menuToggleBtn.addEventListener('click', (event) => {
    navHeader.classList.toggle('active');
    event.stopPropagation();
  });

  document.addEventListener('click', (event) => {
    if (!navHeader.contains(event.target) && !menuToggleBtn.contains(event.target)) {
      navHeader.classList.remove('active');
    }
  });

  navHeader.addEventListener('click', (event) => event.stopPropagation());
}