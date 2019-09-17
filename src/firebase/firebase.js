import firebase from 'firebase'  
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKnRhpd3uGThHKlGVktVby5FPdBCz1XCQ",
    authDomain: "todoapp-2c6e5.firebaseapp.com",
    databaseURL: "https://todoapp-2c6e5.firebaseio.com",
    projectId: "todoapp-2c6e5",
    storageBucket: "",
    messagingSenderId: "831096100566",
    appId: "1:831096100566:web:c202051a49c480d6835b77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;