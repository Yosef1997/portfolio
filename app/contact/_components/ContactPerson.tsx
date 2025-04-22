'use client'
import { footerLinks } from '@/components/Footer'
import Image from 'next/image'

const ContactPerson = () => {
  return (
    <div>
      <Image
        className='bg-off-white rounded-full'
        src='https://res.cloudinary.com/dhbg53ncx/image/upload/t_Profile/v1744357240/ns3rde9pscxedwb5mbck.png'
        alt='profile image'
        width={297}
        height={297}
        priority
      />
      <div className='mt-5 lg:mt-14'>
        <p className='text-xs md:text-lg text-dark-grey'>Contact Details</p>
        <p className='text-lg md:text-[27px]'>yosefsitumorang97@gmail.com</p>
        <p className='text-lg md:text-[27px]'>Indonesia</p>
      </div>

      <div className='mt-5 lg:mt-14 grid '>
        <p className='text-xs md:text-lg text-dark-grey'>Social</p>
        {footerLinks.map((e) => {
          return (
            <a
              key={e.label}
              href={e.href}
              className='text-lg md:text-[27px]'
              target='_blank'
              rel='noopener noreferrer'
            >
              {e.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default ContactPerson
