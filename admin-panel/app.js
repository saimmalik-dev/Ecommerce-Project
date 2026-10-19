import { auth, db } from "../firebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";



const email = document.getElementById("email")
const password = document.getElementById("password")

const adminForm = document.getElementById("admin-form")
adminForm.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        // const user = await createUserWithEmailAndPassword(auth, email.value, password.value); we  will create admin only once and then we will use signInWithEmailAndPassword to login as admin
        const user = await signInWithEmailAndPassword(auth, email.value, password.value);
        const userId = await doc(db, "users", user.user.uid);
        await setDoc(userId, {
            name: "ADMIN",
            email: email.value,
            password: password.value,
            role: "admin"
        })
        alert("Admin logged in successfully")

        window.location.href = "dashboard.html"


    } catch (error) {

        alert(error.message)
        console.error(error)
    }
})

