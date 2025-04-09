import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOYHwx9e49LRgpuJbtkpsHQk4eVDSdoSM",
  authDomain: "quickprompt-50e5d.firebaseapp.com",
  projectId: "quickprompt-50e5d",
  storageBucket: "quickprompt-50e5d.firebasestorage.app",
  messagingSenderId: "418018893915",
  appId: "1:418018893915:web:4578d3f02d30e2d5601f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
