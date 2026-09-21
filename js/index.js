const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const plan = button.dataset.plan;
        localStorage.setItem("planElegido", plan);
        window.location.href = "pages/registro.html";
    });
});
