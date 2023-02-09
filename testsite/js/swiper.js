document.addEventListener("DOMContentLoaded", function(){

    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
    }

    function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
    }

    function updateSlides() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

});
