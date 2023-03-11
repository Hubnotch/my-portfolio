import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
      <h1 className='my-6 font-light text-4xl'>Hello! </h1>
      <h2 className='my-7 font-light md:text-4xl max-w-2xl text-2xl'>
        I&apos;m <span className='font-bold'>Ekene Ugwuanyi</span>, a front-end software engineer focused on building beautiful interfaces & experiences. </h2>
      <h3 className='my-5 text-sm md:text-xl'>
        <span>Get in touch </span><a className='py-1 border-b-2 border-sky-500 outline-none' href="mailto:love2ekene@gmail.com" target='_blank'>love2ekene@gmil.com</a></h3>
    </div>
  )
}
export default Hero