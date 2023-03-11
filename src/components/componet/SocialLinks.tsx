import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

type Props = {}

const SocialLinks = (props: Props) => {
  const links = [
    {
      id: 1, socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), link: 'https://www.linkedin.com/in/ekene-ugwuanyi',
    style:'rounded-tr-md'},
    {
      id: 1, socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), link: 'https://www.linkedin.com/in/ekene-ugwuanyi',
    style:'rounded-tr-md'},
    {
      id: 1, socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), link: 'https://www.linkedin.com/in/ekene-ugwuanyi',
    style:'rounded-tr-md'},
    {
      id: 1, socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), link: 'https://www.linkedin.com/in/ekene-ugwuanyi',
    style:'rounded-tr-md'},
    {
      id: 1, socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), link: 'https://www.linkedin.com/in/ekene-ugwuanyi',
    style:'rounded-tr-md'},
  ]
  return (
    <div className='flex flex-col top-[40%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-white' href="">
            <>LinkedIn<FaLinkedin size={30}/></>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks