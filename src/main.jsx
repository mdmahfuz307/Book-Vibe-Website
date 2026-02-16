import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Toast from './components/Toast/Toast';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import './index.css';
import { router } from './Routes/Routes.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <RouterProvider router={router} />
        <Toast />
        <ScrollToTop />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
);
