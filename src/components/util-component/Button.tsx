import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title:string
}

const Button: React.FC<ButtonProps> = ({ children, ...props })=>{
  return (
    <button className='border border-sky-500 px-4 py-3 rounded flex justify-center items-center' {...props}> {children}</button>
  )
}

export default Button