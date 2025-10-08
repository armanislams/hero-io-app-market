import React from 'react';
import error from '../../assets/App-Error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-10'>
            <img src={error} alt="error" />
            <h1 className='font-bold text-4xl'>Sorry, page not found</h1>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to={'/'}>
            <button className='btn bg-linear-to-r from-[#5e1afc] to-[#9F62F2] text-white text-lg'>Go Home</button>
            </Link>
            
        </div>
    );
};

export default Error;