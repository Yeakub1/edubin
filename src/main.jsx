import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './components/Routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './components/Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
