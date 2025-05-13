import { assets, personalData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
        <Image src={assets.profile_img} alt='profile-image' className='rounded-full w-32' />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl font-ovo'>Hi! I'm <span className='font-bold text-primary font-3xl'>{personalData.fullName}</span><Image src={assets.hand_icon} alt='hand-icon' className='w-6 mb-1' />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        {personalData.jobTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} className='max-w-2xl mx-auto text-lg font-ovo'>
        {personalData.introduction}
      </motion.p>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-primary text-white transition-all duration-300 flex items-center gap-2 hover:bg-blue-500'>
          contact me <Image src={assets.right_arrow_white} alt='right-arrow' className='w-4 mt-1' />
        </a>
        <a href="/sample-resume.pdf" download target='_blank' className='border-gray-500 transition-all duration-300 hover:bg-neutral-100 flex items-center gap-2 px-10 py-3 border rounded-full bg-white dark:text-black' >
          my resume <Image src={assets.download_icon} alt='download-icon' className='w-4 mt-1' />
        </a>
      </motion.div>
    </div>
  )
}

export default Header