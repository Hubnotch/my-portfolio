import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

type Props = {}

const Contact = (props: Props) => {
  const links = [
    {
      id: 1, 
      socialIcon: (<><FaLinkedin size={30} /></>), 
      link: 'https://www.linkedin.com/in/ekene-ugwuanyi/',
      style: 'rounded-tr-md'
    },
    {
      id: 2, 
      socialIcon: (<><FaGithub size={30} /></>), 
      link: 'https://www.github.com/Hubnotch',
      
    },
    {
      id: 3, 
      socialIcon: (<><FaTwitter size={30} /></>), 
      link: 'https://www.twitter.com/hubnotch',
      
    },
    {
      id: 4, 
      socialIcon: (<><HiOutlineMail size={30} /></>), 
      link: 'mailto:love2ekene@gmail.com',
      
    },
    {
      id: 5, 
      socialIcon: (<><BsFillPersonLinesFill size={30} /></>), 
      link: '/resume.pdf',
      style: 'rounded-br-md',
      download:true
    },
  ]
  return (
    <div name='contact' className='px-4 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='flex flex-col justify-center mx-auto max-w-screen-lg h-full'>
        <div className='pb-8'>
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me...</p>
        </div>
        <div className='flex justify-center items-center'>
          {/* <form action="" className='flex flex-col w-full md:w-1/2'>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea 
            name="message" 
            id="message "
            cols={30}
            rows={10}
           className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>
            <button className="cursor-pointer border-2 flex justify-center items-center rounded-md px-6 py-3 my-8 mx-auto text-white hover:scale-105 duration-300">submit</button>
          </form> */}
           <div className='flex'>
              <ul  className='flex flex-wrap justify-center'>
              {links.map(({ id, socialIcon, link, style, download }) => (
                <li key={id} className={`rounded m-3 flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:skew-x-6 duration-300 ${style}`}>
                  <a className='flex justify-between items-center w-full text-white' href={link} target='_blank' download={download}>
                   {socialIcon}
                  </a>
                </li>
              ))}
      
      </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

 
  // return (
  //   <div className='lg:flex'>
  //     <ul>
  //       {links.map(({ id, socialIcon, link, style, download }) => (
  //         <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 ${style}`}>
  //           <a className='flex justify-between items-center w-full text-white' href={link} target='_blank' download={download}>
  //            {socialIcon}
  //           </a>
  //         </li>
  //       ))}

  //     </ul>
  //   </div>
  // )