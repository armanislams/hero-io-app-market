import React from 'react';
import bannerImg from '../../assets/hero.png';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-gray-100 flex flex-col justify-center items-center  space-y-5'>
            <div className='mt-5 mx-auto'>
                <h1 className='lg:text-7xl text-5xl font-semibold'>We Build <br />
                <span className='text-purple-500 font-bold'>Productive</span> Apps</h1>
                
            </div>
            <div className='text-gray-500 lg:max-w-1/2 mx-auto'>
                    <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex gap-7'>
                    <Link to={'https://play.google.com/store/' }target="_blank"><button className='btn text-lg' >
                       <FaGooglePlay></FaGooglePlay>Google Play</button></Link>
                    <Link to={'https://www.apple.com/app-store/'} target="_blank"><button className='btn text-lg'>
                        <FaAppStore></FaAppStore>App Store</button></Link>
                </div>
                  <div className="divider divider-secondary w-1/30 mx-auto"></div>

            <div className=''>
                <img src={bannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
