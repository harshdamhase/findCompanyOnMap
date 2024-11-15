// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZmUk5YlxjCmJCaEzkWkGQoVmg-ekJCiY",
    authDomain: "findcompanyonmap.firebaseapp.com",
    projectId: "findcompanyonmap",
    storageBucket: "findcompanyonmap.appspot.com",
    messagingSenderId: "638227079631",
    appId: "1:638227079631:web:0fa26ee21d28f250e3b2ba",
    measurementId: "G-G0GKE784B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);