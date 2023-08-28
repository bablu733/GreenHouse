// JavaScript for image carousel
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');
const cardWidth = carouselCards[0].offsetWidth;
let currentIndex = 0;

function moveToCard(index) {
    const newPosition = -index * cardWidth;
    carouselTrack.style.transform = `translateX(${newPosition}px)`;
    currentIndex = index;
}

// Move to the next card
function nextCard() {
    currentIndex = (currentIndex + 5) % carouselCards.length;
    moveToCard(currentIndex);
}

// Move to the previous card
function prevCard() {
    currentIndex = (currentIndex - 5 + carouselCards.length) % carouselCards.length;
    moveToCard(currentIndex);
}

setInterval(nextCard, 5000); // Automatically switch cards every 5 seconds

const navigationIcon = document.querySelector('.navigation-icon');
const navigationMenu = document.querySelector('.navigation-menu'); // Your navigation menu element

navigationIcon.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
});


let slideIndex = 0;
showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("slideshow-slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 1000); // Change slide every 5 seconds
// }

