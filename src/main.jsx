import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import { router } from './routes/router.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Toaster position="top-center" reverseOrder={false} />
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
