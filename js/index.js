// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHMD-gpXIUnvGf6W7bXQFxPODYefDMPtA",
  authDomain: "portfolio-form-66925.firebaseapp.com",
  projectId: "portfolio-form-66925",
  storageBucket: "portfolio-form-66925.appspot.com",
  messagingSenderId: "5818207812",
  appId: "1:5818207812:web:8cbe67e35d1f6a6e857611",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// DOM Elements
const contactForm = document.querySelector("#contact-form");
const Name        = document.querySelector("#input-name");
const Email       = document.querySelector("#input-email");
const Subject     = document.querySelector("#input-subject");
const Message     = document.querySelector("#input-message");
const Submit      = document.querySelector("#input-submit");
const Modal       = document.querySelector(".modal-wrap");
const Close       = document.querySelector(".modal-close");

// Function to send user data to Firestore
const sendUserData = (name, email, subject, message) => {
  addDoc(collection(db, "Contact-form"), { 
    name, 
    email, 
    subject,
    message
  });
}

// Function to reset form fields
function resetForm() {
  contactForm.reset();
}

// Function to show modal
function showModal() {
  Modal.classList.remove('display-none');
}

// Function to hide modal
function hideModal() {
  Modal.classList.add('display-none');
}

// Event listener for the submit button
Submit.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  var name    = Name.value.trim();
  var email   = Email.value.trim();
  var subject = Subject.value.trim();
  var message = Message.value.trim();

  if (name === "" || email === "" || subject === "") {
      alert("Please fill in all fields before submitting.");
      return;
  }

  sendUserData(name, email, subject, message);
  showModal();
  resetForm(); // Reset form fields
});

// Event listener for the close button
Close.addEventListener('click', function() {
  hideModal();
});
