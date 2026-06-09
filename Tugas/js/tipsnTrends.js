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
let tombol = document.querySelectorAll(".filter button");
let card = document.querySelectorAll(".card");

tombol.forEach(function(btn){

    btn.addEventListener("click", function(){

        tombol.forEach(function(item){
            item.classList.remove("active");
        });

        btn.classList.add("active");

        let kategori = btn.dataset.filter;

        card.forEach(function(kartu){

            if(kategori == "all"){
                kartu.style.display = "block";
            }
            else if(kartu.dataset.kategori == kategori){
                kartu.style.display = "block";
            }
            else{
                kartu.style.display = "none";
            }

        });

    });

});
let allCards = document.querySelectorAll(".card");
let pageButtons = document.querySelectorAll(".pageBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let emptyMsg = document.getElementById("emptyMessage");
let itemPerPage = 6;
let halamanSekarang = 1;

function tampilHalaman(halaman) {
    let mulai = (halaman - 1) * itemPerPage;
    let selesai = mulai + itemPerPage;
    let jumlahTampil = 0;

    allCards.forEach(function(card, i) {
        if (i >= mulai && i < selesai) {
            card.style.display = "block";
            jumlahTampil++;
        } else {
            card.style.display = "none";
        }
    });

    if (jumlahTampil == 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
    }

    pageButtons.forEach(function(btn) {
        btn.classList.remove("activePage");
    });

    if (halaman >= 1 && halaman <= pageButtons.length) {
        pageButtons[halaman - 1].classList.add("activePage");
    }
}

pageButtons.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        halamanSekarang = i + 1;
        tampilHalaman(halamanSekarang);

        window.scrollTo({
            top: document.querySelector(".filter").offsetTop - 100,
            behavior: "smooth",
        });
    });
    
});

nextBtn.addEventListener("click", function() {
    let maxHalaman = Math.ceil(allCards.length / itemPerPage) + 1;
    if (halamanSekarang < maxHalaman) {
        halamanSekarang++;
        tampilHalaman(halamanSekarang);
        window.scrollTo({
            top: document.querySelector(".filter").offsetTop - 100,
            behavior: "smooth",
        });
    }
});

prevBtn.addEventListener("click", function() {
    if (halamanSekarang > 1) {
        halamanSekarang--;
        tampilHalaman(halamanSekarang);
        window.scrollTo({
            top: document.querySelector(".filter").offsetTop - 100,
            behavior: "smooth",
        });
    }
});

tampilHalaman(1);

let readMore = document.querySelectorAll(".readMore");

let popup = document.getElementById("popup");
let popupTitle = document.getElementById("popupTitle");
let popupText = document.getElementById("popupText");

let closePopup = document.getElementById("closePopup");

let artikelData = {

    1: {
        title: "2026 Douyin Makeup Trends You Need to Try",

        text: "Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear. Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear.Douyin makeup continues to dominate beauty trends in 2026. Popular looks include soft matte skin, subtle contouring, natural blush placement, and glossy lips. These techniques create a youthful appearance while remaining suitable for daily wear."
    },

    2: {
        title: "Korean Makeup Trends For Student",

        text: "Korean makeup for students focuses on simplicity and freshness. Lightweight cushions, straight brows, gradient lips, and natural eye makeup help achieve a clean and youthful look suitable for school and casual activities."
    },

    3: {
        title: "How to Make Your Makeup Last All Day",

        text: "Start with a clean face and apply primer before foundation. Use thin layers of product and set them with powder. Finish with a setting spray to keep makeup fresh throughout the day."
    },

    4: {
        title: "Best Skincare Routine For Beginners",

        text: "A simple routine includes cleanser, moisturizer, and sunscreen. Beginners should avoid using too many active ingredients at once and focus on maintaining healthy skin barriers."
    },

    5: {
        title: "Trending Lip Colors This Season",

        text: "Soft pink, peach nude, and berry shades are among the most popular lip colors this season. These shades complement a wide range of skin tones and makeup styles."
    },

    6: {
        title: "Everyday Makeup For School",

        text: "Use lightweight products and focus on enhancing natural features. Tinted sunscreen, blush, mascara, and lip tint are enough to create a fresh appearance suitable for school."
    }

};

readMore.forEach(function(btn){

    btn.addEventListener("click", function(e){

        e.preventDefault();

        let id = btn.dataset.artikel;

        popupTitle.innerHTML = artikelData[id].title;

        popupText.innerHTML = artikelData[id].text;

        popup.style.display = "flex";
    });

});

closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});

popup.addEventListener("click", function(e){

    if(e.target === popup){
        popup.style.display = "none";
    }

});