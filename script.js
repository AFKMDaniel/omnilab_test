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

const animElements = document.querySelectorAll('.anim_element');

function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
  
    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight / 1;
  
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight / 1 && coords.bottom > 0;
  
    return topVisible || bottomVisible;
  }

window.addEventListener('scroll', () => {
    animElements.forEach(animElement => {
        if(isVisible(animElement)){
            animElement.classList.add('active');
        } else {
            animElement.classList.remove('active');
        }
    })
})