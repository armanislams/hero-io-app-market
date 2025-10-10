import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import App from '../App/App';

const Home = () => {
    
    return (
        <div>
             <Banner></Banner>
              <Stats></Stats>
               <App></App>
        </div>
    );
};

export default Home;