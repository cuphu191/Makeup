let hamburger = document.getElementById("hamburger");
let hamburgerIcon = document.getElementById("hamburgerIcon");
let closeNav = document.getElementById("closeNav");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {
    nav.classList.add("active");
    hamburgerIcon.src = "../asset/down.png";
});

closeNav.addEventListener("click", function() {
    nav.classList.remove("active");
    hamburgerIcon.src = "../asset/more.png";
});

const revealItems = document.querySelectorAll(".reveal");

function showReveal(){

    revealItems.forEach((item)=>{

        const top =
        item.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(top < screen - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    showReveal
);

showReveal();

const modelImg =
document.getElementById("model");

const models = [

    "../asset/Model.jpg",
    "../asset/shin eun soo.jpg",
    "../asset/Justina xie.jpg"

];

let currentModel = 0;

setInterval(()=>{

    modelImg.classList.add("out");

    setTimeout(()=>{

        currentModel++;

        if(currentModel >= models.length){
            currentModel = 0;
        }

        modelImg.src = models[currentModel];

        modelImg.classList.remove("out");

        modelImg.classList.add("in");

    },700);

},8000);