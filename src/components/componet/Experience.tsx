import Image from 'next/image'
import React from 'react'
import css from '../../assets/images/tech-stack/css.png'
import github from '../../assets/images/tech-stack/github.png'
import graphql from '../../assets/images/tech-stack/graphql.png'
import html from '../../assets/images/tech-stack/html.png'
import javascript from '../../assets/images/tech-stack/javascript.png'
import nextks from '../../assets/images/tech-stack/nextks.png'
import node from '../../assets/images/tech-stack/node.png'
import react from '../../assets/images/tech-stack/react.png'
import tailwind from '../../assets/images/tech-stack/tailwind.png'

const Experience = () => {
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex justify-center flex-col w-full h-full text-white'>
        <div>
          <p className='font-4xl font-bold border-b-4 border-gray p-2 inline'>My Tech Stack</p>
          <p>These are technologies I&apos;ve worked with</p>
        </div>
        <div>
          <div>
            <Image src={html } alt='html'/>
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience