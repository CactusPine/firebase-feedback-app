// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-id",
  appId: "your-app-id",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Login logic
document.getElementById("login-btn").addEventListener("click", () => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch(err => alert("Login failed: " + err.message));
});

// Form submit logic
document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("feedback").value;
  push(ref(db, "feedbacks"), { message })
    .then(() => alert("Message saved!"))
    .catch(err => alert("Failed to save: " + err.message));
});
