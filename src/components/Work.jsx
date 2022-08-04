import React from "react";
import ama from '../assets/AMA_Bot.png';
import tribe from '../assets/tribe.png';
import rancid from '../assets/RancidTomatillos.png';
import nyt from '../assets/NYTimes.png';
import portfolio from '../assets/Portfolio.png';
import recipeco from '../assets/Recipeco.png';

const Work = () => {
  return(
    <div name='work' className='w-full md:h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work.</p>
        </div>

        {/* Container for all projects*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/* Card/Grid item */}
          <div
            style={{ backgroundImage: `url(${nyt})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                NYT
              </span>
              <div className='pt-8 text-center'>
                <a href='http://nyt-psi.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/lswatson16/nyt'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${tribe})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tribe
              </span>
              <div className='pt-8 text-center'>
                <a href='https://fe-tribe.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/Tribe-Turing/fe_tribe'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${recipeco})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                Recip-Eco
              </span>
              <div className='pt-8 text-center'>
                <a href='https://recip-eco.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/lswatson16/stretch-tech'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${rancid})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                Rancid Tomatillos
              </span>
              <div className='pt-8 text-center'>
                <a href='https://gaping-hammer.surge.sh/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/lswatson16/Rancid_Tomatillos'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${ama})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                AMA AI
              </span>
              <div className='pt-8 text-center'>
                <a href='https://fun-with-ai-rho.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/lswatson16/ama_ai'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'> 
              <span className='text-2xl font-bold text-white tracking-wider'>
                Personal Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href='https://portfolio-lswatson16.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/lswatson16/portfolio'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Work;