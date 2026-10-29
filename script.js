const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const yearNode = document.querySelector('#year');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
