import React, { Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import logo from '../../public/logo.png';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return (
            <div className='flex justify-center items-center mx-auto mt-10 gap-5'>
            <img className='animate-spin lg:w-1/12 w-1/10' src={logo} alt="Loading.." />
             <h1 className='lg:text-7xl text-5xl font-bold'>Loading...</h1>
            </div>
        )
    }
    
    return (
        <div className=' text-center'>
            <Navbar></Navbar> 
            <Outlet></Outlet>
           
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;