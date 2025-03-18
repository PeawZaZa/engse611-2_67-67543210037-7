document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.img-selector');
    let slideInterval;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetTimer();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetTimer();
    });

    dots.forEach((dot, index) => {
        dot.setAttribute('data-index', index); 
        dot.addEventListener('click', function() {
            showSlide(index);
            resetTimer();
        });
    });

    function startSlideTimer() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    showSlide(0); 
    startSlideTimer();
});
