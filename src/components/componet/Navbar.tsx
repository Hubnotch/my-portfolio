import React from 'react'
import { Button } from '../util-component'

type Props = {}

const Navbar = () => {
   const links = [
    {id:1,link:'home'},
    {id:2,link:'about'},
    {id:3,link:'portfolio'},
    {id:4,link:'experience'},
    {id:5,link:'contact'},
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <h1 className="text-5xl">Ekene.</h1>
      <ul className="hidden md:flex">
        {links.map(({id,link} )=> (
          <li key={id} className="capitalize cursor-pointer px-4 font-medium text-gray-500 hover:scale-105 duration-300">
            {link}
          </li>
        ))}
</ul>
   </div>
  )
}

export default Navbar