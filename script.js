const tombol = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi");

tombol.onclick = function () {
    cover.style.display = "none";
    isi.style.display = "block";
}

const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(function(){

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){

        index = 0;

    }

    slides[index].classList.add("active");

},3000);

const targetDate = new Date("December 11, 2026 08:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

// ===============================
// NAMA TAMU OTOMATIS
// ===============================

const params = new URLSearchParams(window.location.search);

const namaTamu = params.get("to");

if (namaTamu) {
    document.getElementById("namaTamu").textContent =
    decodeURIComponent(namaTamu);
}