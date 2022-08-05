import React from 'react';
import JavaScript from '../assets/javascript.svg';
import ReactLogo from '../assets/react.svg';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';

const Skills = () => {
  return(
    <div name='skills' className='text-gray-300 w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>I am proficient in these technologies:</p>
          <ul>
            <li>&bull; <strong>Languages/Frameworks:</strong> React | JS | HTML | CSS</li>
            <li className='py-4'>&bull; <strong>Testing:</strong> Cypress | Mocha | Chai</li>
          </ul>
        </div>

        {/* Container for all icons*/}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt='React icon'/>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon'/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon'/>
            <p className='my-4'>CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;