// ===============================
// COVER & MUSIC
// ===============================

const tombol = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi");
const music = document.getElementById("music");

tombol.addEventListener("click", bukaUndangan);

function bukaUndangan() {

    cover.style.display = "none";
    isi.style.display = "block";

    if (music && data.musik) {

        music.src = "assets/" + data.musik;
        music.load();

        music.play().catch(function (err) {
            console.log(err);
        });

    }

}

// ===============================
// GALLERY
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 1;

function updateGallery(){

    slides.forEach(function(slide){

        slide.classList.remove("left");
        slide.classList.remove("active");
        slide.classList.remove("right");

    });

    let left = index - 1;
    if(left < 0){
        left = slides.length - 1;
    }

    let right = index + 1;
    if(right >= slides.length){
        right = 0;
    }

    slides[left].classList.add("left");
    slides[index].classList.add("active");
    slides[right].classList.add("right");

    dots.forEach(function(dot){
        dot.classList.remove("active");
    });

    dots[index % dots.length].classList.add("active");

}

updateGallery();

next.addEventListener("click", function(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    updateGallery();

});

prev.addEventListener("click", function(){

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    updateGallery();

});

setInterval(function(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    updateGallery();

},3000);

// ===============================
// COUNTDOWN
// ===============================

const targetDate = new Date("December 11, 2026 08:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// ===============================
// NAMA TAMU
// ===============================

const params = new URLSearchParams(window.location.search);

const namaTamu = params.get("to");

if (namaTamu) {

    document.getElementById("namaTamu").textContent =
        decodeURIComponent(namaTamu);

}

// ===============================
// DATA PENGANTIN
// ===============================

const saveNama = document.getElementById("saveNama");

if (saveNama) {
    saveNama.textContent =
        data.pengantinPria + " & " + data.pengantinWanita;
}

const saveTanggal = document.getElementById("saveTanggal");

if (saveTanggal) {
    saveTanggal.textContent = data.tanggal;
}

const namaLengkapPria = document.getElementById("namaLengkapPria");

if (namaLengkapPria) {
    namaLengkapPria.textContent = data.namaLengkapPria;
}

const namaLengkapWanita = document.getElementById("namaLengkapWanita");

if (namaLengkapWanita) {
    namaLengkapWanita.textContent = data.namaLengkapWanita;
}

const ortuPria = document.getElementById("ortuPria");

if (ortuPria) {
    ortuPria.textContent =
        data.ayahPria + " & " + data.ibuPria;
}

const ortuWanita = document.getElementById("ortuWanita");

if (ortuWanita) {
    ortuWanita.textContent =
        data.ayahWanita + " & " + data.ibuWanita;
}

// ===============================
// WEDDING LOCATION
// ===============================

const lokasi = document.getElementById("lokasi");

if (lokasi) {
    lokasi.textContent = data.lokasi;
}

const alamat = document.getElementById("alamat");

if (alamat) {
    alamat.textContent = data.alamat;
}

const btnMaps = document.getElementById("btnMaps");

if (btnMaps) {
    btnMaps.href = data.maps;
    btnMaps.target = "_blank";
}

// ===============================
// WEDDING GIFT
// ===============================

const bank1 = document.getElementById("bank1");
const namaRekening1 = document.getElementById("namaRekening1");
const nomorRekening1 = document.getElementById("nomorRekening1");
const copyBtn1 = document.getElementById("copyBtn1");

if (bank1) bank1.textContent = data.bank1;
if (namaRekening1) namaRekening1.textContent = data.namaRekening1;
if (nomorRekening1) nomorRekening1.textContent = data.nomorRekening1;

if (copyBtn1) {

    copyBtn1.addEventListener("click", function () {

        navigator.clipboard.writeText(data.nomorRekening1);

        alert("Nomor rekening berhasil disalin.");

    });

}

const bank2 = document.getElementById("bank2");
const namaRekening2 = document.getElementById("namaRekening2");
const nomorRekening2 = document.getElementById("nomorRekening2");
const copyBtn2 = document.getElementById("copyBtn2");

if (bank2) bank2.textContent = data.bank2;
if (namaRekening2) namaRekening2.textContent = data.namaRekening2;
if (nomorRekening2) nomorRekening2.textContent = data.nomorRekening2;

if (copyBtn2) {

    copyBtn2.addEventListener("click", function () {

        navigator.clipboard.writeText(data.nomorRekening2);

        alert("Nomor rekening berhasil disalin.");

    });

}