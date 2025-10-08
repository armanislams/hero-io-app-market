import React from 'react';
import logo from '../../../public/logo.png'
import { NavLink, Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import './Nav.css';


const Navbar = () => {
    const links = <>
    <div className='flex flex-col md:flex-row items-center md:gap-5 gap-2'><NavLink to={'/'}><li>Home</li></NavLink>
    <NavLink to={'/apps'}><li>Apps</li></NavLink>
    <NavLink to={'/installation'}><li>Installation</li></NavLink></div>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-20 justify-between " >
  <div className="navbar-start">
    
    <Link to={'/'}>
    <div className='flex items-center gap-3'>
        <img className='lg:w-1/12 w-1/5' src={logo} alt="site logo" />
        <h3 className='font-bold text-xl'><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</span></h3>
    </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}  
    </ul>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <Link to={'https://github.com/armanislams'}><a className="btn bg-linear-to-r from-[#5e1afc] to-[#9F62F2] text-white text-lg"><FaGithub></FaGithub>Contribute</a></Link>
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        <Link to={'https://github.com/armanislams'}><a className="btn bg-linear-to-r from-[#5e1afc] to-[#9F62F2] text-white text-lg"><FaGithub></FaGithub>Contribute</a></Link>
      </ul>
      
    </div>
</div>
    );
};

export default Navbar;