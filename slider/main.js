const prev = document.getElementById('btn-prev'); // кнопка предыдущий слайд
const next = document.getElementById('btn-next'); // кнопка следующего слайда
const slides = document.querySelectorAll('.slide'); // массив слайдов с классом .slide
const dots = document.querySelectorAll('.dot'); // массив кнопок dot под слайдами

// переменная для отслеживания текущего слайда
let index = 0;

// функция которая ставит активный слайд
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

// функция которая ставит активную точку под слайдом
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

// функция для объединения в одну индекса на слайде
// и на точке под слайдом
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

// проверяем последний ли слайд и переключаемся на первый
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

// проверяем первый ли слайд и переключаемся на последний
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

// функция для клика по точкам под слайдом
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

// вызов функций переключения слайдов вперед и назад
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
