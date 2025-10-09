import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router"; 
import { router } from './Routes/Routes.jsx';
import logo from '../public/logo.png'; 


const fallBack = (
  <div className='flex flex-col items-center justify-center h-screen'> 
    <img 
        className='animate-spin w-20 h-20'
        src={logo} 
        alt="Loading..." 
    />
    <h1 className='text-2xl mt-4'>Loading...</h1>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
      router={router}
      fallbackElement={fallBack} 
    />
  </StrictMode>,
);