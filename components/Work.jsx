import { assets, personalData, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='max-w-5xl mx-auto max-md:px-10 py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>{personalData.workIntroduction}</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:mx-10 my-10 gap-5'>
        {workData.map((project,index) => (
          <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          style={{backgroundImage: `url(${project.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000]
              group-hover:bg-lightHover transition-all'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="" className='w-max hover:bg-neutral-100 duration-500 flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20'>
        Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
      </a>
    </div>
  )
}

export default Work