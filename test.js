let allBtn = document.querySelectorAll(".filter-btn"); //4 btn
let allCards = document.querySelectorAll(".card-menu"); // 6 col dishes

allBtn.forEach((btn) => {
    btn.addEventListener("click", function () {

        allBtn.forEach((b) => b.classList.remove("activeBtn"));
        btn.classList.add("activeBtn")

        let filter = btn.getAttribute("data-filter"); //lunch

        allCards.forEach((card) => {
            if (filter === "all") {
                card.classList.remove("hide")

            } else if (card.classList.contains(filter)) {
                card.classList.remove("hide")
            } else {
                card.classList.add("hide")
            }
        })



    })
})

