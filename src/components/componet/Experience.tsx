import next from 'next'
import Image from 'next/image'
import React from 'react'
import css from '../../assets/images/tech-stack/css.png'
import github from '../../assets/images/tech-stack/github.png'
import graphql from '../../assets/images/tech-stack/graphql.png'
import html from '../../assets/images/tech-stack/html.png'
import javascript from '../../assets/images/tech-stack/javascript.png'
import nextjs from '../../assets/images/tech-stack/nextjs.png'
import node from '../../assets/images/tech-stack/node.png'
import react from '../../assets/images/tech-stack/react.png'
import tailwind from '../../assets/images/tech-stack/tailwind.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML5',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS3',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next JS',
      style: 'shadow-white',
    },
    {
      id: 7,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-400',
    },
    {
      id: 8,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex justify-center flex-col w-full h-full text-white'>

        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>My Tech Stack</p>
          <p className='py-6'>These are technologies I&apos;ve worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px0 '>

          {techs.map(({ id, src, title, style }) => (
              <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
            <Image className='w-20 mx-auto ' src={src} alt={title} />
            <p className='mt-4'>{title}</p>
          </div>

          ))}
        
        </div>

      </div>
    </div>
  )
}

export default Experience