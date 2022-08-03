import React from 'react';

const About = () => {
  return(
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Lauralyn, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p> 
              After a decade of working in customer service in the healthcare industry, 
              I grew deeply aware of the intersection between user empathy and software.
              And how the lack of empathy can lead to poor user experiences.
              I want to change that narrative by collaborating with an innovative and inclusive team that is 
              passionate about building excellent software that creates a positive impact on our users and society.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;