import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/css/style.css"
import 'react-loading-skeleton/dist/skeleton.css';
import './assets/css/componentAnimation.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
                position={"top-center"}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
  </>,
)
