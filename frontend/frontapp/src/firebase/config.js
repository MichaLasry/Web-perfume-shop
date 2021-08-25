import firebase from 'firebase/app'
import 'firebase/storage'
const firebaseConfig = {
        apiKey: "AIzaSyCtXrKii2U7PV915kiG-MZEabCu1Lnt7Xo",
        authDomain: "react-project-d5721.firebaseapp.com",
        projectId: "react-project-d5721",
        storageBucket: "react-project-d5721.appspot.com",
        messagingSenderId: "501685753226",
        appId: "1:501685753226:web:cb35a3cf451cfba569a473"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {storage, firebase as default}
