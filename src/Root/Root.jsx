import React, { Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import logo from '../../public/logo.png';

const Root = () => {
    const navigation  = useNavigation();
    if(navigation.state === 'loading'){
        return (
            <div className='flex  justify-center items-center mx-auto mt-10'>
            <img className='animate-spin w-1/12' src={logo} alt="Loading.." />
             <h1 className='text-7xl font-bold'>Loading...</h1>
            </div>
        )
    }
    return (
        <div className=' text-center'>
            <Navbar></Navbar> 
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;