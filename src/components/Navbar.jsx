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
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className='hidden'>
        <FaBars />
      </div>

      {/* Mobile menu */}
        <div className='hidden'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

      {/* Social icons */}
        <div></div>
    </div>
  )
}

export default Navbar;