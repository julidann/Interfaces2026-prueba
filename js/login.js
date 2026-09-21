const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");
const authCard = document.querySelector(".auth-card");
const googleLogin = document.querySelector("#google-login");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.querySelector("#login-user").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    if (user === "" || password === "") {
        showLoginError("Completá usuario y contraseña.");
        return;
    }

    loginMessage.textContent = "Inicio de sesión correcto";
    loginMessage.className = "form-message success";

    authCard.classList.remove("error");
    authCard.classList.add("success");

    setTimeout(function () {
        window.location.href = "home.html";
    }, 1200);
});

googleLogin.addEventListener("click", function () {
    loginMessage.textContent = "Inicio de sesión con Google simulado";
    loginMessage.className = "form-message success";

    authCard.classList.add("success");

    setTimeout(function () {
        window.location.href = "home.html";
    }, 1200);
});

function showLoginError(message) {
    loginMessage.textContent = message;
    loginMessage.className = "form-message";

    authCard.classList.remove("error");
    void authCard.offsetWidth;
    authCard.classList.add("error");
}
