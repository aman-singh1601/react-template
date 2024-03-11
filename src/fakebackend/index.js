import { initializeApp } from "firebase/app";



const firebaseConfig = {

  apiKey: "AIzaSyDqgpygy2y7pyBmgbawLX48z8Tg9Dx63jw",

  authDomain: "alpaago-cc709.firebaseapp.com",

  projectId: "alpaago-cc709",

  storageBucket: "alpaago-cc709.appspot.com",

  messagingSenderId: "391133135487",

  appId: "1:391133135487:web:9d267bde74bbfba066754a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };