const registerForm = document.querySelector("#register-form");
const registerMessage = document.querySelector("#register-message");
const registerCard = document.querySelector("#register-card");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.querySelector("#password").value;
    const repeatPassword = document.querySelector("#repeat-password").value;

    if (password !== repeatPassword) {
        registerMessage.textContent = "Las contraseñas no coinciden.";
        registerMessage.className = "register-message";
        return;
    }

    registerMessage.textContent = "¡Registro completado correctamente!";
    registerMessage.className = "register-message success";

    registerCard.classList.remove("success");
    void registerCard.offsetWidth;
    registerCard.classList.add("success");

    setTimeout(function () {
        window.location.href = "home.html";
    }, 1600);
});
