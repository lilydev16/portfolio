import React, { useState } from 'react';
import Logo from '../assets/lw.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300'>
      <div>
        <img className='w-12' src={Logo} alt='logo' />
      </div>

      {/* Nav menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to='home' smooth={true} offset={50} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='about' smooth={true} offset={50} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='skills' smooth={true} offset={50} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='work' smooth={true} offset={50} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='contact' smooth={true} offset={50} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-100'>
              <a className='flex justify-between items-center w-full text-gray-700' 
                href='https://www.linkedin.com/in/lauralyn-watson/'>
                LinkedIn
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-100'>
              <a className='flex justify-between items-center w-full text-gray-700' 
                href='https://github.com/lswatson16'>
                GitHub
                <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-100'>
              <a className='flex justify-between items-center w-full text-gray-700' 
                href='mailto:watsonlauralyn@gmail.com'>
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-100'>
              <a className='flex justify-between items-center w-full text-gray-700' 
                href={resume} download target='_blank' rel="noreferrer"
              >
                  Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li> */}
          </ul>
        </div>
    </div>
  )
}

export default Navbar;