async function cargarFooter() {
    try {
        let ruta = window.location.pathname.includes("/pages/")
            ? "../templates/footer.html"
            : "templates/footer.html";

        let response = await fetch(ruta);

        if (response.ok) {
            let footer = await response.text();
            document.querySelector("footer").innerHTML = footer;
        }
    } catch (error) {
        console.log("Error al cargar el footer");
    }
}

cargarFooter();
