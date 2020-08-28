import * as firebase from 'firebase/app'


var firebaseConfig = {
  apiKey: "AIzaSyCFtKhqfyMP83D_ab2fz4oJFFD9bA5Kxaw",
  authDomain: "react-user-auth-c84de.firebaseapp.com",
  databaseURL: "https://react-user-auth-c84de.firebaseio.com",
  projectId: "react-user-auth-c84de",
  storageBucket: "react-user-auth-c84de.appspot.com",
  messagingSenderId: "235694759727",
  appId: "1:235694759727:web:09f5b060be4ad3666fcbda",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;