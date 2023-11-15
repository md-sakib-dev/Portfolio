import React, { useState } from 'react'
import bike from '../assets/Portfolio/bike.png'
import nike from '../assets/Portfolio/nike.png'
import movie from '../assets/Portfolio/movie.png'
import ecommerce from '../assets/Portfolio/e-commerce.png'
import data from '../assets/Portfolio/data.png'

const Portfolio = () => {
  const portfolio=[
    {
      id:1,
      src:movie,
      href:"https://movie-server-six.vercel.app/",
      code:"https://github.com/md-sakib-dev/Movie-server.git"
    },
    {
      id:2,
      src:bike,
      href:"https://bikers-bhai.vercel.app/",
      code:"https://github.com/md-sakib-dev/Biker-s-Bhai.git"
    },
    {
      id:3,
      src:nike,
      href:"https://nike-just-do-it.vercel.app/",
      code:"https://github.com/md-sakib-dev/Nike-Just-Do-It.git",
    },
    {
      id:4,
      src:ecommerce,
      href:"https://e-commerce-sage-one.vercel.app/",
      code:"https://github.com/md-sakib-dev/E-commerce.git"
    },
    {
      id:5,
      src:data,
      href:"https://data-analytical.vercel.app/",
      code:"https://github.com/md-sakib-dev/Data-Analytical.git"
    },
  ]
 

 
  return (
    <div name="portfolio" className='w-full bg-black text-white 2xl:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline '>Portfolio</p>
          <p className='py-6'>Check out some of my Work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-9'>
          {portfolio.map(({id,src,href,code})=>{
            return(

          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex justify-center items-center'>
              <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank'>Demo</a>
              <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank'>Code</a>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio