import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Sociallinks = () => {
    const Links=[
      {
        id:1,
        child:(
          <>
          Linkedin <FaLinkedin/>
      </>
        ),
        href:"https://www.linkedin.com/in/md-sakib-dev/",
        style:"rounded-tr-md"
      },
      {
        id:2,
        child:(
          <>
          GitHub <FaGithub/>
      </>
        ),
        href:"https://github.com/md-sakib-dev",
      },
      {
        id:3,
        child:(
          <>
          Mail <HiOutlineMail/>
      </>
        ),
        href:"mailto:mahbubalamsakib007@gmail.com",
      },
      {
        id:4,
        child:(
          <>
          Resume <BsFillPersonLinesFill/>
      </>
        ),
        href:"/MD_SAKIB_resume.pdf",
        style:"rounded-br-md",
        download:true,
      }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          {Links?.map(({id,child,href,style,download})=>{
            return(


              <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  ml-[-110px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-gray-500'+ " " + style}><a href={href} className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'>
             {child}
            </a>
            </li>
            )

          })}
        </ul>

    </div>
  )
}

export default Sociallinks