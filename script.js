const tombol = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi");
const music = document.getElementById("music");

tombol.onclick = function () {

    cover.style.display = "none";
    isi.style.display = "block";

    music.src = "assets/" + data.musik;

    music.play();

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

// ===========================
// DATA PENGANTIN
// ===========================

const saveNama = document.getElementById("saveNama");
if (saveNama) {
    saveNama.textContent =
    data.pengantinPria + " & " + data.pengantinWanita;
}

const saveTanggal = document.getElementById("saveTanggal");
if (saveTanggal) {
    saveTanggal.textContent =
    data.tanggal;
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

const namaLengkapPria = document.getElementById("namaLengkapPria");
if (namaLengkapPria) {
    namaLengkapPria.textContent =
    data.namaLengkapPria;
}

const namaLengkapWanita = document.getElementById("namaLengkapWanita");
if (namaLengkapWanita) {
    namaLengkapWanita.textContent =
    data.namaLengkapWanita;
}

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

// ===========================
// WEDDING GIFT
// ===========================

document.getElementById("bank1").textContent = data.bank1;
document.getElementById("namaRekening1").textContent = data.namaRekening1;
document.getElementById("nomorRekening1").textContent = data.nomorRekening1;

document.getElementById("bank2").textContent = data.bank2;
document.getElementById("namaRekening2").textContent = data.namaRekening2;
document.getElementById("nomorRekening2").textContent = data.nomorRekening2;

document.getElementById("copyBtn1").onclick = function () {
    navigator.clipboard.writeText(data.nomorRekening1);
    alert("Nomor rekening berhasil disalin.");
};

document.getElementById("copyBtn2").onclick = function () {
    navigator.clipboard.writeText(data.nomorRekening2);
    alert("Nomor rekening berhasil disalin.");
};