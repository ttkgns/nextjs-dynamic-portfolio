import { assets, personalData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile-image' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl font-ovo'>Hi! I'm <span className='font-bold text-primary font-3xl'>{personalData.fullName}</span><Image src={assets.hand_icon} alt='hand-icon' className='w-6 mb-1' /> </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>{personalData.jobTitle}</h1>
      <p className='max-w-2xl mx-auto text-lg font-ovo'>{personalData.introduction}</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-primary text-white transition-all duration-300 flex items-center gap-2 hover:bg-blue-500'>
          contact me <Image src={assets.right_arrow_white} alt='right-arrow' className='w-4 mt-1'/>
        </a>
        <a href="/sample-resume.pdf" download target='_blank' className='border-gray-500 transition-all duration-300 hover:bg-neutral-100 flex items-center gap-2 px-10 py-3 border rounded-full' >
          my resume <Image src={assets.download_icon} alt='download-icon' className='w-4 mt-1'/>
        </a>
      </div>
    </div>
  )
}

export default Header