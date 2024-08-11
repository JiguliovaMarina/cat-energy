const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

let flag = false;

nav.classList.add('nav--js');

if (sliderControl) {
  sliderControl.addEventListener('click', () => {
    if (flag) {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    } else {
      slider.classList.add('slider--after');
      flag = true;
    }
  });
}
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});
