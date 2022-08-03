import React from "react";

const Contact = () => {
  return (
    <div name='contact' className = 'w-full h-screen flex justify-center items-center p-4'>
      <form
        action='https://getform.io/f/9aa474c1-f3e0-4cda-aa79-b8d275960d99'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input
          className='bg-teal-50 p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-teal-50'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-teal-50 p-2'
          name='message' 
          rows='10' 
          placeholder='Message'>
        </textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact;