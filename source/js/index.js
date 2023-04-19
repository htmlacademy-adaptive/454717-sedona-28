const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainНeader = document.querySelector('.main-header');

mainHeaderToggle.eddEventListener('click', () => {
  mainНeader.classList.toggle('is-open');
});
