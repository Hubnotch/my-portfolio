import React from 'react'


const Footer = () => {
  return (
    <div id="footer" className="px-4 w-full h-auto py-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-col justify-center mx-auto max-w-screen-lg h-full">
        <p>Designed and made by <a href="https://github.com/Hubnotch" target="_blank">Hubnotch</a></p>
        <div className="flex justify-center items-center">
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer