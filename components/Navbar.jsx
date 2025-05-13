import { assets, personalData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)

  const sideMenuRef = useRef()
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) setIsScroll(true)
      else setIsScroll(false)
    })  
  },[])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="header" className='w-full' />
      </div>
      <nav className={`w-full flex items-center justify-between fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50
        ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          {/* <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" /> */}
          <h1 className='md:ml-10 lg:ml-20 text-4xl font-bold text-primary upper'>{personalData.name} • </h1>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
          ${isScroll ? "" : "bg-white/50 shadow-sm"}`}>
          <li><a className='font-ovo' href="#top">Home</a></li>
          <li><a className='font-ovo' href="#about">About me</a></li>
          <li><a className='font-ovo' href="#services">Services</a></li>
          <li><a className='font-ovo' href="#work">My Work</a></li>
          <li><a className='font-ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='moon-icon' className='w-6' />
          </button>
          <a className='hidden font-ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' href="#contact">
            Contact <Image src={assets.arrow_icon} alt="arrow-icon" className='w-3' />
          </a>
          <button onClick={openMenu} className='block md:hidden ml-3 cursor-pointer'>
            <Image src={assets.menu_black} alt='menu-icon' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500'>
          <div onClick={closeMenu} className='absolute right-6 top-6'>
            <Image src={assets.close_black} alt='close' className='w-5 cursor-pointer' />
          </div>

          <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar