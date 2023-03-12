import Image from 'next/image'
import React from 'react'
import chatgpt from '../../assets/images/projects/chatgpt.png'
import gericht from '../../assets/images/projects/gericht.png'
import scorecard from '../../assets/images/projects/scorecard.png'


type Props = {}

const Work = (props: Props) => {
  const portfolio = [
    {
      id: 1,
      src: chatgpt
    },
    {
      id: 2,
      src: gericht
    },
    {
      id: 3,
      src: scorecard
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div
        className="max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full">
        <div
          className="pb-8">
          <p
            className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
          <p
            className='py-6'>Checkout some of my work</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolio.map(({ id, src }) => (
            <div key={id}
              className="shadow-md shadow-gray-500 rounded-lg ">
              <Image
                className='rounded-lg duration-300 hover:scale-105' src={src} alt="chatgpt" />
              <div
                className="flex items-center justify-center">
                <button
                  className='py-3 w-1/2 px-6 m-4 duration-200 hover:scale-100'>Demo</button>
                <button
                  className='py-3 w-1/2 px-6 m-4 duration-200 hover:scale-100'>Code</button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Work