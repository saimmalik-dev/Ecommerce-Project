import { auth, db } from "../firebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";



const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

const userForm = document.getElementById("user-form")
userForm.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        const user = await createUserWithEmailAndPassword(auth, email.value, password.value);
        // const user = await signInWithEmailAndPassword(auth, email.value, password.value);
        const userId = await doc(db, "users", user.user.uid);
        await setDoc(userId, {
            name: name.value,
            email: email.value,
            password: password.value,
            userId: user.user.uid,
            status: "active",
            role: "user" // hard-coded value
        })

        alert("User registered  successfully")

        window.location.href = "index.html"


    } catch (error) {

        alert(error.message)
        console.error(error)
    }
})

