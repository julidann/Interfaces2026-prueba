const galleryImages = [
    {
        image: "../assets/img/spider-peg-1.jpg",
        text: "Spider-Peg - tablero principal"
    },
    {
        image: "../assets/img/spider-peg-2.jpg",
        text: "Spider-Peg - partida en progreso"
    },
    {
        image: "../assets/img/spider-peg-3.jpg",
        text: "Spider-Peg - selección de ficha"
    },
    {
        image: "../assets/img/spider-peg-4.jpg",
        text: "Spider-Peg - desafío avanzado"
    }
];

const galleryMain = document.querySelector("#gallery-main");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");

galleryThumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
        const index = Number(thumb.dataset.index);
        const selectedImage = galleryImages[index];

        galleryThumbs.forEach(function (item) {
            item.classList.remove("active");
        });

        thumb.classList.add("active");

        galleryMain.classList.remove("changing");
        void galleryMain.offsetWidth;

        galleryMain.style.backgroundImage =
            "linear-gradient(#0002, #0009), url('" + selectedImage.image + "')";

        galleryCaption.textContent = selectedImage.text;
        galleryMain.classList.add("changing");
    });
});

const reviewButtons = document.querySelectorAll(".review-title");

reviewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.parentElement.classList.toggle("open");
    });
});

const playButton = document.querySelector("#play-button");

playButton.addEventListener("click", function () {
    playButton.textContent = "Cargando...";

    setTimeout(function () {
        playButton.textContent = "Juego listo";
    }, 1000);
});
