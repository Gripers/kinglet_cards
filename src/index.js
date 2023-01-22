import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ContextProvider} from './context';
import 'react-modern-drawer/dist/index.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {topbar} from 'react-router-loading';
import {ToastContainer} from 'react-toastify';

topbar.config({
    barColors: {
        0: '#ae8625',
        0.3: '#f7ef8a',
        1.0: '#d2ac47',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
        <App/>
        <ToastContainer/>
    </ContextProvider>
  </BrowserRouter>
);
