// Carousel Script
const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Move left by 100% for each image
    carousel.style.transform = `translateX(${offset}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

// Optional: Auto slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}, 3000);

// FAQ Script
const faqItems = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    faqItems.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
    });

    if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

faqItems.forEach(item => item.addEventListener('click', toggleAccordion));