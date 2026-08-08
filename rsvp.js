import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


const sendButton = document.getElementById("sendRsvp");


if (sendButton) {

    sendButton.addEventListener("click", async function () {

        const guestName =
            document.getElementById("guestName").value.trim();

        const guestMessage =
            document.getElementById("guestMessage").value.trim();

        const attendance =
    document.getElementById("attendance");


        if (guestName === "") {

            alert("Silakan isi nama Anda.");

            return;
        }


        if (attendance.value === "") {

            alert("Silakan pilih konfirmasi kehadiran.");

            return;
        }


        try {

            await addDoc(
                collection(db, "rsvp"),
                {

                    nama: guestName,

                    kehadiran: attendance.value,

                    ucapan: guestMessage,

                    waktu: serverTimestamp()

                }
            );


            alert(
                "Terima kasih telah mengirim konfirmasi kehadiran. 🤍"
            );


            document.getElementById("guestName").value = "";

            document.getElementById("guestMessage").value = "";

           


        } catch (error) {

            console.error("RSVP ERROR:", error);

            alert(
                "Gagal mengirim RSVP: " + error.message
            );

        }

    });

}