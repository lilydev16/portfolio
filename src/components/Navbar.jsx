import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300'>
      <div>
        <img className='w-12' src={Logo} alt='logo image' />
      </div>

      {/* Nav menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden'>
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar;