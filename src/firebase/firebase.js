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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


// https://css-tricks.com/firebase-react-part-2-user-authentication/