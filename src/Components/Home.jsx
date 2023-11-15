import React from 'react'
import img from "../assets/hero2.png"
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

export const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center  md:justify-center md:gap-5 h-full px-4 md:flex-row text-white '>
            <div className='flex flex-col justify-center h-full mt-16 md:mt-0'>
                <h2 className='text-4xl sm:text-6xl font-bold'>I'm a FrontEnd Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have 1 year of experience building and designing web applications.
                For building those applications i like to use technologies like
                React, tailwind and Git </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className=' group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                </Link>
            </div>
            </div>
        <div>
            <img className='rounded-2xl mx-auto w-[280px] md:w-[380px] ' src={img} alt="" />
        </div>
       
        </div>
    </div>
  )
}
