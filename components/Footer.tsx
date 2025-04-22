'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const footerLinks = [
  { label: 'Linkedin', href: 'https://linkedin.com/in/yosef-situmorang97' },
  { label: 'Github', href: 'https://github.com/Yosef1997' },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/yosefsitumorang1',
  },
]

const Footer = () => {
  const path = usePathname()

  return (
    <footer className='flex flex-col p-5 md:p-20 bg-black'>
      {path !== '/contact' && (
        <div className='flex items-center justify-between mb-[50px] md:mb-[100px]'>
          <p className='text-2xl md:text-4xl lg:text-5xl text-off-white font-medium'>
            Have something in mind?
            <br />
            <span className='flex items-center'>
              <Image
                className='bg-off-white rounded-full md:h-20 sm:w-20'
                src='https://res.cloudinary.com/dhbg53ncx/image/upload/t_Profile/v1744357240/ns3rde9pscxedwb5mbck.png'
                alt='profile image'
                width={40}
                height={40}
                priority
              />
              let’s build it together.
            </span>
          </p>
          <button className='text-lg bg-off-white font-medium bg px-6 py-3 md:px-12 md:py-6 rounded-full hover:border-y-4 hover:font-bold border-off-white'>
            Get in touch
          </button>
        </div>
      )}
      <div className='flex gap-x-4 md:gap-x-8 justify-end'>
        {footerLinks.map((e) => {
          return (
            <a
              key={e.label}
              className='text-xs md:text-lg text-off-white hover:underline hover:underline-offset-4'
              href={e.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {e.label}
            </a>
          )
        })}
      </div>
    </footer>
  )
}
export default Footer
