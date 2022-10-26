const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slider');
const sliderContent = document.querySelector('#slider-content');
let currentSlide = 2;

const moveSlider = (button,oppositeButton,edgeSlide,step) => {
    currentSlide += step;
    if (oppositeButton.classList.contains('close')){
        oppositeButton.removeAttribute('disabled');
        oppositeButton.classList.remove('close');
    }
    if (currentSlide === edgeSlide) {
        button.setAttribute('disabled','true');
        button.classList.add('close');
    }
    sliderContent.style.left= `-${100 * currentSlide}%`;
}

right.addEventListener('click',() => moveSlider(right, left, 4, 1))

left.addEventListener('click', () => moveSlider(left, right, 0 ,-1))