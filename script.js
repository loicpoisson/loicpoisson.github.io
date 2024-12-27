// Fonction pour marquer le menu actif
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
        if (item.getAttribute("href") === currentPage) {
            item.style.fontWeight = "bold";
            item.style.textDecoration = "underline";
        }
    });
});

// Fonction pour afficher une confirmation lors de l’envoi du formulaire
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche l'envoi immédiat du formulaire pour test
        const name = document.querySelector("#name").value;
        alert(`Merci, ${name} ! Votre message a été envoyé avec succès.`);
        contactForm.submit(); // Soumet réellement le formulaire après le message
    });
}