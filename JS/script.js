// MENÚ

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new',{delay: 500});
ScrollReveal().reveal('.cards',{delay: 500});


// FOTOS

const fulimgbox = document.getElementById("fulimgbox");
fulimg = document.getElementById("fulimg");
function openImg(reference) {
    fulimgbox.style.display = "flex";
    fulimg.src = reference;
}
function closeImg() {
    fulimgbox.style.display = "none";
}