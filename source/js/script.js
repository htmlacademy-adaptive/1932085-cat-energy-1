const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');

nav.classList.add('nav--closed');
navButton.addEventListener('click', () => {
nav.classList.toggle('nav--closed');
nav.classList.toggle('nav--opened');
});
