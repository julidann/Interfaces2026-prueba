const loaderScreen = document.querySelector("#loader-screen");
const loaderPercent = document.querySelector("#loader-percent");

let progress = 0;

const loaderInterval = setInterval(function () {
    progress++;
    loaderPercent.textContent = progress + "%";

    if (progress >= 100) {
        clearInterval(loaderInterval);
        loaderScreen.classList.add("hide");

        setTimeout(function () {
            loaderScreen.style.display = "none";
        }, 400);
    }
}, 50);

const menuButton = document.querySelector("#menu-button");
const homeNav = document.querySelector("#home-nav");

menuButton.addEventListener("click", function () {
    homeNav.classList.toggle("open");
});

const featuredRow = document.querySelector("#featured-row");
const featuredPrev = document.querySelector("#featured-prev");
const featuredNext = document.querySelector("#featured-next");

featuredPrev.addEventListener("click", function () {
    featuredRow.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

featuredNext.addEventListener("click", function () {
    featuredRow.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

const searchInput = document.querySelector("#game-search");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.querySelector("#no-results");

searchInput.addEventListener("input", function () {
    const search = searchInput.value.toLowerCase();
    let visibleGames = 0;

    gameCards.forEach(function (card) {
        const title = card.dataset.title.toLowerCase();
        const matches = title.includes(search);

        card.style.display = matches ? "block" : "none";

        if (matches) {
            visibleGames++;
        }
    });

    noResults.style.display = visibleGames === 0 ? "block" : "none";
});
