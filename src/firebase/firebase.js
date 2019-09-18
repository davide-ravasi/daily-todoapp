import firebase from 'firebase';
import {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId} from '../config.js';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;