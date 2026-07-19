const tombol = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi");

tombol.onclick = function () {
    cover.style.display = "none";
    isi.style.display = "block";
}