import React from 'react'
import "./navbar.scss"

const navbar = () => {
  return (
    <div className=' pt-5 pb-5 pr-5 flex justify-end'>
        <a href='/' className=' pr-5 pl-5'>Home</a>
        <a  href='/projects' className=' pr-5 pl-5'>Projects</a>
        <a href='/contact' className=' pr-5 pl-5'>Contact</a>
    </div>
  )
}

export default navbar