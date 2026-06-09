// hamburger menu
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

let allCards = document.querySelectorAll(".card");
let pageButtons = document.querySelectorAll(".pageBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let emptyMsg = document.getElementById("emptyMessage");

let itemPerPage = 9;
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
            top: document.querySelector(".category").offsetTop - 100,
        });
    });
});

nextBtn.addEventListener("click", function() {
    let maxHalaman = Math.ceil(allCards.length / itemPerPage) + 1;
    if (halamanSekarang < maxHalaman) {
        halamanSekarang++;
        tampilHalaman(halamanSekarang);
        window.scrollTo({
            top: document.querySelector(".category").offsetTop - 100,
        });
    }
});

prevBtn.addEventListener("click", function() {
    if (halamanSekarang > 1) {
        halamanSekarang--;
        tampilHalaman(halamanSekarang);
        window.scrollTo({
            top: document.querySelector(".category").offsetTop - 100,
        });
    }
});

tampilHalaman(1);

let tombolCari = document.getElementById("searchBtn");
let inputCari = document.getElementById("searchInput");

tombolCari.addEventListener("click", function() {
    inputCari.classList.toggle("show");
    if (inputCari.classList.contains("show")) {
        inputCari.focus();
    }
});

inputCari.addEventListener("input", function() {
    let keyword = inputCari.value.toLowerCase();

    allCards.forEach(function(card) {
        let namaProduk = card.querySelector("img").alt.toLowerCase();

        if (namaProduk.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

let tombolKategori = document.querySelectorAll(".category button");

tombolKategori.forEach(function(btn) {
    btn.addEventListener("click", function() {

        tombolKategori.forEach(function(item) {
            item.classList.remove("active");
        });

        btn.classList.add("active");

        let kategori = btn.textContent.toLowerCase();

        allCards.forEach(function(card) {
            let altGambar = card.querySelector("img").alt.toLowerCase();

            if (kategori == "all") {
                card.style.display = "block";
            } else if (altGambar.includes(kategori)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});