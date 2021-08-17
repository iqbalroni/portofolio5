const slider = document.querySelector('.slider-container ');

const SlideKanan = document.querySelector('.right-slider');
const SlideKiri = document.querySelector('.left-slider');

const upButton = document.querySelector('.up-button');
const DownButton = document.querySelector('.down-button');

const SlidesLenght = SlideKiri.querySelectorAll('div').length;

let activeSlideIndex = 0;

// SlideKiri.style.top =  `-${(SlidesLenght - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
DownButton.addEventListener('click', () => changeSlide('down'));

// setTimeout(function myFunction() {changeSlide('up');},3000);

const changeSlide = (direction) =>{
    const slideHeight = slider.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > SlidesLenght - 1){
            activeSlideIndex = 0;
        }
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = SlidesLenght - 1
        }
    }

    SlideKanan.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
    }px)`;
    SlideKiri.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
    }px)`;
}