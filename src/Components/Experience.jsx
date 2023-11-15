import React from 'react'
import git from '../assets/github.png'
import mongo from '../assets/mongo.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import cplus from '../assets/c.png'
import html from '../assets/html.png'
import vue from '../assets/vue.png'
import netlify from '../assets/netlify.png'
import vercel from '../assets/vercel.png'

const Experience = () => {
  const tools=[
    {
      id:1,
      src:cplus,
      p:"C++",
      style:"shadow-sky-500"
    },
    {
      id:2,
      src:html,
      p:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:3,
      src:tailwind,
      p:"Tailwind CSS",
      style:"shadow-blue-500"
    },
    {
      id:4,
      src:js,
      p:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:5,
      src:vue,
      p:"Vue.js",
      style:"shadow-white"
    },

    {
      id:5,
      src:react,
      p:"React.JS",
      style:"shadow-white"
    },
    {
      id:6,
      src:mongo,
      p:"MongoDB",
      style:"shadow-green-600"
    },
    {
      id:7,
      src:git,
      p:"GitHub",
      style:"shadow-gray-800"
    },
    {
      id:8,
      src:netlify,
      p:"Netlify",
      style:"shadow-sky-500"
    },
    {
      id:9,
      src:vercel,
      p:"Vercel",
      style:"shadow-white"
    },

  ]
  return (
    <div name="experience" className='w-full 2xl:h-screen bg-black text-white'>
      <div className='flex flex-col justify-center w-full h-full mx-auto max-w-screen-lg p-4'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline '>Experience</p>
          <p className='py-6'>These are the tools I've worked with</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center w-full pb-8'>
            {tools?.map(({id,src,p,style})=>{
              return(

         <div key={id} className={'shadow-md hover:scale-105 duration-200 py-2 rounded-lg' + " " + style}>

          <img src={src} alt=""  className='w-14 mx-auto'/>
            <p className='mt-2'>{p}</p>
         </div>
              )
            })}
         </div>
            </div>
           
      </div>
    </div>
  )
}

export default Experience