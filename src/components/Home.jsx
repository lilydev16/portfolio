import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return(
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1>Hi, my name is</h1>
        <h2>Lauralyn Watson</h2>
        <h3>I'm a software engineer</h3>
        <p>I'm a software engineer specialized in building inclusive and responsive web applications.</p>
        <div>
          <button>View Work < HiArrowNarrowRight /></button>
        </div>
      </div>

    </div>
  )
}

export default Home;