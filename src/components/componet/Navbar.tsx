import React from 'react'
import { Button } from '../util-component'

type Props = {}

const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center w-full'>
      <div className='text-3xl font-black flex justify-center items-center tracking-widest'>
        Ekene.
      </div>
      {/* <div className='w-4/5 flex justify-evenly'>
        <a href="#about"  className='self-center'>About</a>
        <a href="#experience"  className='self-center'>Experience</a>
        <a href="#work"  className='self-center'>Work</a>
        <a href="#contact"  className='self-center'>Contact</a>
        <a href="#"  className='self-center'><Button title={''}>Resume</Button></a>
      </div> */}
    </nav>
  )
}

export default Navbar