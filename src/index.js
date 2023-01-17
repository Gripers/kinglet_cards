import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import 'react-modern-drawer/dist/index.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
