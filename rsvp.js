import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

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

        alert("Terima kasih telah mengirim RSVP. 🤍");

        document.getElementById("guestName").value = "";
        document.getElementById("guestMessage").value = "";
        attendance.checked = false;

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

});