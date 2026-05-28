const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    // On vérifie la position verticale du scroll
    if (window.scrollY > 50) { 
        header.style.backgroundColor = "#ffffff6c";
        header.style.backdropFilter = "blur(10px)"; // Optionnel : pour un effet flouté moderne
    } else {
        header.style.backgroundColor = "transparent"; // Retour à l'état initial
    }
});