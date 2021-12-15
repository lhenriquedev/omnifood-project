// Set current year
const yearEl = document.querySelector('.footer-year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// =================== Mobile navigation ===================//
const headerEl = document.querySelector('.header') 
const btnNavEl = document.querySelector('.btn-mobile-nav')

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open')
})