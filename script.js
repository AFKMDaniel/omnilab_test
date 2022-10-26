const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slider');
const sliderContent = document.querySelector('#slider-content');
let currentSlide = 2;

right.addEventListener('click', () => {
    currentSlide++;
    if (left.classList.contains('close')){
        left.removeAttribute('disabled');
        left.classList.remove('close');
    }
    if (currentSlide === 4) {
        right.setAttribute('disabled','true');
        right.classList.add('close');
    }
    sliderContent.style.left= `-${100 * currentSlide}%`;
})

left.addEventListener('click', () => {
    currentSlide--;
    if (right.classList.contains('close')){
        right.removeAttribute('disabled');
        right.classList.remove('close');
    }
    if (currentSlide === 0){
        left.setAttribute('disabled','true');
        left.classList.add('close');
    }
    sliderContent.style.left= `-${100 * currentSlide}%`;
})