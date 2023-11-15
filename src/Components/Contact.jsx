import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full 2xl:h-screen bg-black p-4 text-white'>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline '>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/b82227b0-d179-4cc4-af04-c146193a0ad1" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border rounded-md text-white focus:outline-none text-sm'/>
                    <input type="email" name='email' placeholder='Enter your email' className='p-2 bg-transparent border rounded-md text-white focus:outline-none my-4 text-sm'/>
                <textarea name="message" placeholder='Enter your message'  rows="10" className='p-2 bg-transparent border rounded-md text-white focus:outline-none text-sm'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact