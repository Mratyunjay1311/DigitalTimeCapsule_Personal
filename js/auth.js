import { auth, db } from "../firebase-config.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc
  
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const signOutBtn= document.getElementById("signOut");

  if (loginBtn) {
    loginBtn.addEventListener("click", async (e) => {
        e.preventDefault()
        
      const email = document.getElementById("login-email").value.trim()
      const password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth , email , password)

        window.location.href = "capsulepage.html";
      } catch (error) {
        document.getElementById('login-error').innerText = error.message

      }
    });
  }

  if(registerBtn){
    registerBtn.addEventListener('click',async(e)=>{
        e.preventDefault();
      const name = document.getElementById("register-name").value.trim();
        const email = document.getElementById('register-email').value.trim()
        const password = document.getElementById('register-password').value
const error = document.getElementById('register-error')
        function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
}
        try {

              if (!isValidEmail(email)) {
    error.textContent = "Invalid email format!";
    return;
  }

    if (!isStrongPassword(password)) {
    error.textContent = "Password must be at least 8 characters long and contain uppercase, lowercase, number, and symbol.";
    return;
  }
            const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
           const user = userCredentials.user;

            await setDoc(doc(db,"users",user.uid),{
                fullname: name,
               email: email,
                'createdAt': new Date()
                
            })

               setTimeout(() => {
        window.location.href = 'login.html';
      }, 150);
        } catch (error) {
            document.getElementById('register-error').innerText = error.message

        }
    })
  }

  if(signOutBtn){
    signOutBtn.addEventListener('click',async()=>{
      
       try {
        await firebaseSignOut(auth);
        window.location.href = "login.html";
      } catch (error) {
        alert("Logout failed: " + error.message);
      }
    })
  }
});
