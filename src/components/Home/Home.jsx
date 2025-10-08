import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
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