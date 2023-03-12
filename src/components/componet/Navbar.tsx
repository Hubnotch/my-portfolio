'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ]
  const handleClick = () => { setOpenNavbar(!openNavbar) }
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <h1 className="text-5xl">Ekene.</h1>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize cursor-pointer px-4 font-medium text-gray-500 hover:scale-105 duration-300">
          <Link to={link} smooth duration={500}>  {link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleClick} className="cursor-pointer pr-6 z-10 text-gray-500 md:hidden">
        {openNavbar ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {openNavbar && (
              <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
           {links.map(({ id, link }) => (
          <li key={id} className="capitalize cursor-pointer px-4 text-3xl py-6 text-gray-500 hover:scale-105 duration-300">
               <Link
                 onClick={()=> setOpenNavbar(!openNavbar)}
                 to={link}
                 smooth
                 duration={500}>
                 {link}
               </Link>
          </li>
        ))}
      </ul>
)}
    </div>
  )
}

export default Navbar