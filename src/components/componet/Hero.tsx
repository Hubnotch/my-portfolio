import React from "react"
import Image from "next/image"
import Link from "next/link"
import profile from "../../assets/images/profile/profile.jpg"
import { MdExpandMore } from "react-icons/md"


const Hero = () => {
  return (
    <div id="home" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">

        <h1 className="my-6 font-light text-4xl">Hello! </h1>
        <h2 className="my-7 font-light md:text-4xl max-w-2xl text-2xl">
          I&apos;m <span className="font-bold">Ekene Ugwuanyi</span>, a front-end software engineer focused on building beautiful interfaces & experiences. </h2>
        <h3 className="my-5 text-sm md:text-xl">
          <span>Get in touch </span><a className="py-1 border-b-2 border-sky-500 outline-none" href="mailto:love2ekene@gmail.com" target="_blank">love2ekene@gmil.com</a></h3>
      </div>
    </div>
  )
}

export default Hero
