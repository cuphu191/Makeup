const cards = document.querySelectorAll(".card");

const pageBtns = document.querySelectorAll(".pageBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const emptyMessage = document.getElementById("emptyMessage");

const perPage = 9;

let currentPage = 1;

function showPage(page){

    const start = (page - 1) * perPage;
    const end = start + perPage;

    let visibleCard = 0;

    cards.forEach((card,index)=>{

        if(index >= start && index < end){

            card.style.display = "block";
            visibleCard++;

        }
        else{

            card.style.display = "none";

        }

    });

    if(visibleCard === 0){

        emptyMessage.style.display = "block";

    }
    else{

        emptyMessage.style.display = "none";

    }

    pageBtns.forEach((btn)=>{
        btn.classList.remove("activePage");
    });

    if(page >= 1 && page <= pageBtns.length){

        pageBtns[page - 1].classList.add("activePage");

    }

}

pageBtns.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        currentPage = index + 1;

        showPage(currentPage);

    });

});

nextBtn.addEventListener("click",()=>{

    const maxPage = Math.ceil(cards.length / perPage) + 1;

    if(currentPage < maxPage){

        currentPage++;

        showPage(currentPage);

    }

});

prevBtn.addEventListener("click",()=>{

    if(currentPage > 1){

        currentPage--;

        showPage(currentPage);

    }

});

showPage(1);

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click",()=>{

    searchInput.classList.toggle("show");

    if(searchInput.classList.contains("show")){
        searchInput.focus();
    }

});

searchInput.addEventListener("input",()=>{

    const keyword = searchInput.value.toLowerCase();

    cards.forEach((card)=>{

        const img = card.querySelector("img");

        const productName =
            img.alt.toLowerCase();

        if(productName.includes(keyword)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

});
const categoryBtns = document.querySelectorAll(".category button");


categoryBtns.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        categoryBtns.forEach((item)=>{
            item.classList.remove("active");
        });

        btn.classList.add("active");

        const category =
            btn.textContent.toLowerCase();

        cards.forEach((card)=>{

            const alt =
                card.querySelector("img")
                .alt
                .toLowerCase();

            if(category === "all"){

                card.style.display = "block";

            }
            else if(alt.includes(category)){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

});