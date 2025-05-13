import { assets, personalData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 font-outfit'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-primary mb-2 ml-2'>{personalData.name} • </h1>
        <div className='w-max mx-auto flex items-center gap-2'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail-icon' className='w-6' />
          {personalData.emailAddress}
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@2025 {personalData.fullName}. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href={personalData.githubLink}>Github</a></li>
          <li><a target='_blank' href={personalData.linkedinLink}>Linkedin</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer