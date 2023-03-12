import React from 'react'
import { Heading } from '../util-component'

type Props = {}

const About = (props: Props) => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      {/* <Heading title='About' /> */}
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
          <p className='text-xl mt-20'>Hello! My name is Ekene Ugwuanyi.I a front-end software engineer. I am passionate about creating dynamic and visually stunning websites and applications that not only look great but also provide an exceptional user experience.
          </p>
          <br/>
          <p className='text-xl'>With a strong background in web development, I specialize in writing clean, maintainable code using the latest technologies such as HTML5, CSS3, and JavaScript frameworks like React and Angular.
          </p>
          <br/>
          <p className='text-xl'>
            I am constantly staying up to date with the latest industry trends and best practices, and enjoy collaborating with cross-functional teams to deliver high-quality products. Above all, I am committed to creating intuitive and seamless user interfaces that enhance the overall user experience and drive business success.
          </p>
      </div>
    </div>
  )
}
export default About