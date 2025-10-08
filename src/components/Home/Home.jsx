import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import App from '../App/App';
import logo from '../../../public/logo.png';

const Home = () => {
    return (
        <div>
            
            <Suspense fallback={<div> 
                <img className='animate-spin' src={logo} alt="Loading.." />
                <h1>Loading...</h1>
                </div>}>
                           <Banner></Banner>
                        <Stats></Stats>
                        <App></App>
            </Suspense>
        </div>
    );
};

export default Home;