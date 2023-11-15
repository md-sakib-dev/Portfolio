import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline '>ABOUT</p>
            </div>
            <p className='text-xl mt-14'>
            Hello! I'm MD SAKIB, a passionate frontend developer with expertise in HTML, CSS, and JavaScript, focusing on React.js and Tailwind CSS. Committed to crafting seamless, user-friendly websites, I bring creativity and experience to diverse projects. Let's connect and create innovative web solutions together!
            </p>
            <br />
            <p className='text-xl font-bold m-2'>Email: <span className='text-xl font-normal'>mahbubalamsakib007@gmail.com</span></p>
            <p className='text-xl font-bold m-2'>Address: <span className='text-xl font-normal'>House:365,Vatara,Natunbazar,Dhaka-1212</span></p>
            <p className='text-xl font-bold m-2'>Phone: <span className='text-xl font-normal'>01537506184</span></p>
        </div>
    </div>
  )
}

export default About