import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

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
// GALLERY V3
// ===============================

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indikator = document.querySelector(".indikator");

let current = 0;

// Membuat indikator otomatis
slides.forEach(function () {

    const dot = document.createElement("span");
    dot.classList.add("dot");

    indikator.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

function updateGallery() {

    slides.forEach(function(slide){

        slide.classList.remove("active");
        slide.classList.remove("prev-slide");
        slide.classList.remove("next-slide");

    });

    dots.forEach(function(dot){

        dot.classList.remove("active");

    });

    let prev = current - 1;
    if(prev < 0){
        prev = slides.length - 1;
    }

    let next = current + 1;
    if(next >= slides.length){
        next = 0;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev-slide");
    slides[next].classList.add("next-slide");

    dots[current].classList.add("active");

}

updateGallery();

nextBtn.addEventListener("click", function(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    updateGallery();

});

prevBtn.addEventListener("click", function(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    updateGallery();

});

setInterval(function(){

    current++;

    if(current >= slides.length){
        current = 0;
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

        navigator.clipboard.writeText(
    data.nomorRekening1.replace(/\s/g, "")
);

        const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(function(){

    toast.classList.remove("show");

},2000);

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

        navigator.clipboard.writeText(
    data.nomorRekening2.replace(/\s/g, "")
);

        const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(function(){

    toast.classList.remove("show");

},2000);

    });

}

// ===============================
// KIRIM KADO
// ===============================

const namaGift = document.getElementById("namaGift");
const alamatGift = document.getElementById("alamatGift");
const copyAddressBtn = document.getElementById("copyAddressBtn");

if (namaGift) {
    namaGift.textContent = data.namaGift;
}

if (alamatGift) {
    alamatGift.textContent = data.alamatGift;
}

if (copyAddressBtn) {

    copyAddressBtn.addEventListener("click", function () {

        navigator.clipboard.writeText(data.alamatGift);

        const toast = document.getElementById("toast");

        toast.textContent = "✓ Alamat berhasil disalin";

        toast.classList.add("show");

        setTimeout(function(){

            toast.classList.remove("show");

            toast.textContent = "✓ Nomor rekening berhasil disalin";

        },2000);

    });

}


/* ==========================================
   RSVP FIREBASE
========================================== */

const sendButton = document.getElementById("sendRsvp");

sendButton.addEventListener("click", async function () {

    const guestName = document.getElementById("guestName").value.trim();

    const guestMessage = document.getElementById("guestMessage").value.trim();

    const attendance = document.querySelector('input[name="attendance"]:checked');

    if (guestName === "") {
        alert("Silakan isi nama Anda.");
        return;
    }

    if (!attendance) {
        alert("Silakan pilih konfirmasi kehadiran.");
        return;
    }

    try {

        await addDoc(collection(db, "rsvp"), {

            nama: guestName,

            ucapan: guestMessage,

            kehadiran: attendance.value,

            waktu: serverTimestamp()

        });

        alert("Terima kasih telah mengirim konfirmasi kehadiran. 🤍");

        document.getElementById("guestName").value = "";
        document.getElementById("guestMessage").value = "";
        attendance.checked = false;

    } catch (error) {

        console.error(error);

        alert("Gagal mengirim RSVP.");

    }

});
