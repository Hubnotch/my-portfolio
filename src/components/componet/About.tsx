import React from 'react'
import { Heading } from '../util-component'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full'>
      <Heading title='About' />
      <div className="flex">
        <div className="">
          <p>Hello! My name is Ekene Ugwuanyi.I a front-end software engineer. I am passionate about creating dynamic and visually stunning websites and applications that not only look great but also provide an exceptional user experience.
          </p>
          <p>With a strong background in web development, I specialize in writing clean, maintainable code using the latest technologies such as HTML5, CSS3, and JavaScript frameworks like React and Angular.

          </p>
          <p>
            I am constantly staying up to date with the latest industry trends and best practices, and enjoy collaborating with cross-functional teams to deliver high-quality products. Above all, I am committed to creating intuitive and seamless user interfaces that enhance the overall user experience and drive business success.
          </p>
        </div>
        <div className="">Pic</div>
      </div>
    </div>
  )
}
export default About