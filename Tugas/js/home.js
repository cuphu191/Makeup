const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeNav = document.getElementById("closeNav");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {

    nav.classList.add("active");
    hamburgerIcon.src = "../asset/down.png";

});

closeNav.addEventListener("click", () => {

    nav.classList.remove("active");
    hamburgerIcon.src = "../asset/more.png";

});

function getItemsPerSlide() {
    if (window.innerWidth <= 480) {
        return 1;
    } else if (window.innerWidth <= 768) {
        return 1;
    } else if (window.innerWidth <= 1024) {
        return 2;
    }
    return 4;
}

const slider = document.getElementById("slider");
const items = document.querySelectorAll(".item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentSlide = 0;

function updateSlider() {
    const itemsPerSlide = getItemsPerSlide();

    const maxSlide =
        Math.ceil(items.length / itemsPerSlide) - 1;

    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const itemWidth =
        items[0].getBoundingClientRect().width;

    const gap =
        parseFloat(getComputedStyle(slider).gap) || 0;

    const moveDistance =
        (itemWidth + gap) * itemsPerSlide;

    slider.style.transform =
        `translateX(-${currentSlide * moveDistance}px)`;

    prev.style.opacity = currentSlide === 0 ? "0.5" : "1";
    next.style.opacity = currentSlide === maxSlide ? "0.5" : "1";
}

next.addEventListener("click", () => {
    const itemsPerSlide = getItemsPerSlide();
    const maxSlide =
        Math.ceil(items.length / itemsPerSlide) - 1;

    if (currentSlide < maxSlide) {
        currentSlide++;
        updateSlider();
    }
});

prev.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

window.addEventListener("resize", () => {
    updateSlider();
});

window.addEventListener("load", () => {
    updateSlider();
});
