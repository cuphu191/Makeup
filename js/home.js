function getItemsPerSlide() {
    if (window.innerWidth <= 480) {
        return 1;
    } else if (window.innerWidth <= 768) {
        return 2;
    } else if (window.innerWidth <= 1024) {
        return 3;
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
    const maxSlide = Math.ceil(items.length / itemsPerSlide) - 1;

    currentSlide = Math.min(currentSlide, maxSlide);

    slider.style.transform =
        `translateX(-${currentSlide * 101.5}%)`;
}

next.addEventListener("click", () => {
    const itemsPerSlide = getItemsPerSlide();
    const maxSlide = Math.ceil(items.length / itemsPerSlide) - 1;

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

window.addEventListener("resize", updateSlider);

updateSlider();