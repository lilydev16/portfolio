import React from 'react';
import JavaScript from '../assets/javascript.svg';
import ReactLogo from '../assets/react.svg';
import HTML from '../assets/html.svg';
import CSS from '../assets/css.svg';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return(
    <div name='skills' className='bg-[#0A192F] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'>These are the technologies that I've worked with</p>
        </div>

        <div>
          <div>
            <img 
              className='w-20 mx-auto' 
              src={HTML}
              alt='HTML icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;