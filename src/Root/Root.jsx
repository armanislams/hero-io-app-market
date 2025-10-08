import React, { Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import logo from '../../public/logo.png';

const Root = () => {
    return (
        <div className=' text-center'>
            <Navbar></Navbar>
            <Suspense fallback={<div> 
                            <img className='animate-spin' src={logo} alt="Loading.." />
                            <h1>Loading...</h1>
                        </div>}>
                           <Outlet></Outlet>
                        </Suspense>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;