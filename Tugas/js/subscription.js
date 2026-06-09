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
let form = document.getElementById("subscribeForm");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let category = document.getElementById("category");
let frequency = document.getElementById("frequency");
let agree = document.getElementById("agree");

let error = document.getElementById("error");

form.addEventListener("submit", function(e){

    e.preventDefault();

    error.innerHTML = "";

    if(fullName.value.trim() == ""){
        error.innerHTML = "Full name must be filled";
        return;
    }

    if(fullName.value.trim().length < 3){
        error.innerHTML = "Full name must be at least 3 characters";
        return;
    }

    if(email.value.trim() == ""){
        error.innerHTML = "Email address must be filled";
        return;
    }

    if(email.value.includes("@") == false){
        error.innerHTML = "Email must contain @";
        return;
    }

    if(password.value.length < 8){
        error.innerHTML = "Password must be at least 8 characters";
        return;
    }

    if(category.value == ""){
        error.innerHTML = "Please select a product category";
        return;
    }

    if(frequency.value == ""){
        error.innerHTML = "Please select newsletter frequency";
        return;
    }

    if(agree.checked == false){
        error.innerHTML = "You must agree to the Terms & Privacy Policy";
        return;
    }

    alert("Subscription Successful!");

    form.reset();

});