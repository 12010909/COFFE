const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');
const promoButton = document.querySelector('#promoButton');
const promoMessage = document.querySelector('#promoMessage');
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');
const currentYear = document.querySelector('#currentYear');

menuButton.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mainNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    mainNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

promoButton.addEventListener('click', () => {
  promoMessage.textContent = 'Promoción del día: latte + croissant por $89.';
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#nombre').value.trim();
  formStatus.textContent = `Gracias, ${name}. Este formulario es una demostración y no envió datos.`;
  contactForm.reset();
});

currentYear.textContent = new Date().getFullYear();
