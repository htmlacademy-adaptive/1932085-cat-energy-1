const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');
const slider = document.querySelector('.slider');
const sliderControl = document.querySelector('.slider__control');

nav.classList.add('nav--closed');
navButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
});

if (slider) {
    let flag = false;
    sliderControl.addEventListener('click', () => {
        if(!flag){
            slider.classList.add('slider--after');
            flag = true;
        }else{
            slider.classList.toggle('slider--after');
            slider.classList.toggle('slider--before');
        }
    })
}
