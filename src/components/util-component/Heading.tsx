import React from 'react'
interface HeadingProps {
  title:string
}
const Heading = ({title}:HeadingProps) => {
  return (
    <div className='md:w-3/4 border-b-2 border-sky-500/25 py-3 my-5 md:my-8 outline-none'>
      <h2 className='text-2xl text-sky-500 text-left mr-1 '>{title}</h2>
    </div>
  )
}

export default Heading