/**@type {HTMLElement} */ const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const carouselItems = document.querySelectorAll('.carousel > article');


const carouselLenght = carouselItems.length;
let index = 0;

const setControls = () => {
    if (index === 0) {

    }
    if (index === carouselLenght - 1) {
        
    }
}

//déclaration
const moveCarousel = () => {
carousel.style.transform = `translateX(-${index * 100}vw)`
}

nextBtn.addEventListener('click', () => {
    if (index < carouselLenght - 1) index++
    console.log(index)
    moveCarousel()
    setControls()
})
previousBtn.addEventListener('click', () => {
    if (index > 0) index--
    console.log(index)
    moveCarousel()
    setControls()
})