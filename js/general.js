async function cargarFooter() {
    let response = await fetch("templates/footer.html");
    let footer = await response.text();

    document.querySelector("footer").innerHTML = footer;
}

cargarFooter();