const fulimgbox = document.getElementById("fulimgbox");
fulimg = document.getElementById("fulimg");
function openImg(reference) {
    fulimgbox.style.display = "flex";
    fulimg.src = reference;
}
function closeImg() {
    fulimgbox.style.display = "none";
}