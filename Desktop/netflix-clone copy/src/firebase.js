import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAYX06c1Y2ii6YlPCeNHv3tcH-zSMbCCl8",
  authDomain: "netflixx-videos.firebaseapp.com",
  databaseURL: "https://netflixx-videos-default-rtdb.firebaseio.com",
  projectId: "netflixx-videos",
  storageBucket: "netflixx-videos.appspot.com",
  messagingSenderId: "728197348370",
  appId: "1:728197348370:web:1e319474578cafc4c9eccb",
  measurementId: "G-PDT0BF8QX3"
};

const app = initializeApp(firebaseConfig);