import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div name='contact'className='px-4 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='flex flex-col justify-center mx-auto max-w-screen-lg h-full'>
        <div className='pb-8'>
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me...</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-col w-full md:w-1/2'>
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
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea 
            name="message" 
            id="message "
            cols={30}
            rows={10}
           className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>
            <button className="cursor-pointer border-2 flex justify-center items-center rounded-md px-6 py-3 my-8 mx-auto text-white hover:scale-105 duration-300">submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact