'use client'
import About from '@/components/About'
import Marquee from '@/components/Marquee'
import SectionWithViewport from '@/components/SectionWithViewport'
import Work from '@/components/Work'
import WorkRow from '@/components/WorkRow'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isIntroVisible, setIntroVisible] = useState(true)
  return (
    <div className='overflow-x-hidden'>
      {!isIntroVisible && (
        <div className='fixed z-50 right-3 top-3 lg:top-[26px] flex items-center bg-black rounded-full p-2.5 md:p-5'>
          <Menu color='white' size={25} />
        </div>
      )}
      <div className='relative flex flex-col items-center bg-light-grey pt-6 md:pt-[46px]'>
        <Image
          className='bg-blend-multiply'
          src='https://res.cloudinary.com/dhbg53ncx/image/upload/v1744357240/ns3rde9pscxedwb5mbck.png'
          alt='profile image'
          width={500}
          height={654}
          priority
        />
        <SectionWithViewport
          onEnterViewport={() => setIntroVisible(true)}
          onLeaveViewport={() => setIntroVisible(false)}
        >
          <div className='absolute right-0 top-1/2 flex items-center bg-black rounded-l-full p-[5px] md:py-5 md:px-[30px] translate-x-3/4 hover:-translate-x-0 transition delay-150 duration-300'>
            <span className='text-xl md:text-4xl'>👋</span>
            <span className='text-off-white text-base md:text-[40px] pl-2.5 md:pl-7 '>
              Hi I&apos;m Yosef
            </span>
          </div>
        </SectionWithViewport>

        <Marquee />
      </div>
      <About />
      <Work />
      <WorkRow />
    </div>
  )
}
