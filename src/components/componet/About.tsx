import React from 'react'
import { Heading } from '../util-component'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full'>
      <Heading title='About' />
      <div className="flex">
        <div className="">Write</div>
        <div className="">Pic</div>
      </div>
    </div>
  )
}
export default About