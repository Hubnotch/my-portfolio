import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
// import resume from "../../assets/documents/resume.pdf"

const SocialLinks = () => {
  const links = [
    {
      id: 1, 
      socialIcon: (<>LinkedIn<FaLinkedin size={30} /></>), 
      link: "https://www.linkedin.com/in/ekene-ugwuanyi/",
      style: "rounded-tr-md"
    },
    {
      id: 2, 
      socialIcon: (<>Github<FaGithub size={30} /></>), 
      link: "https://www.github.com/Hubnotch",
      
    },
    {
      id: 3, 
      socialIcon: (<>Twitter<FaTwitter size={30} /></>), 
      link: "https://www.twitter.com/hubnotch",
      
    },
    {
      id: 4, 
      socialIcon: (<>Email<HiOutlineMail size={30} /></>), 
      link: "mailto:love2ekene@gmail.com",
      
    },
    {
      id: 5, 
      socialIcon: (<>Resume<BsFillPersonLinesFill size={30} /></>), 
      link: "/resume.pdf",
      style: "rounded-br-md",
      download:true
    },
  ]
  return (
    <div className="hidden lg:flex flex-col top-[40%] left-0 fixed">
      <ul>
        {links.map(({ id, socialIcon, link, style, download }) => (
          <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 ${style}`}>
            <a className="flex justify-between items-center w-full text-white" href={link} target="_blank" download={download}>
             {socialIcon}
            </a>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default SocialLinks