var app_firebase = {};

(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBN_CeLM2WPyx2N7NRY_NqdpCwhWdM6P0c",
        authDomain: "study-curve-login-and-hosting.firebaseapp.com",
        databaseURL: "https://study-curve-login-and-hosting.firebaseio.com",
        projectId: "study-curve-login-and-hosting",
        storageBucket: "study-curve-login-and-hosting.appspot.com",
        messagingSenderId: "319471545663",
        appId: "1:319471545663:web:4a510a7ac041747038778a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;
})()