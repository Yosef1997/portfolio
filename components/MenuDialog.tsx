'use client'
import Link from 'next/link'
import { Dot, X } from 'lucide-react'
import { footerLinks } from './Footer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/contact' },
]
const MenuDialog: React.FC<{ onClosed: () => void }> = ({ onClosed }) => {
  const path = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className='flex fixed flex-col-reverse lg:flex-row inset-0 z-50 min-h-screen'>
      <div className='bg-black opacity-40 h-1/2 lg:w-1/2 lg:min-h-screen' />
      <div className='flex flex-col justify-between bg-black w-full h-1/2 lg:w-1/2 lg:min-h-screen p-9 lg:p-[60px]'>
        <div className='absolute right-9 lg:right-[60px]'>
          <div
            onClick={onClosed}
            title='Close Menu Dialog'
            className='p-3 rounded-full bg-off-white text-black text-[40px]'
          >
            <X />
          </div>
        </div>
        <div className='flex flex-col gap-y-3.5 lg:gap-y-7 mt-5'>
          {menuLinks.map((e) => {
            return (
              <Link
                key={e.label}
                href={e.href}
                onClick={onClosed}
                className={`flex items-center text-xl lg:text-6xl font-medium text-off-white`}
              >
                {isMounted && path + window.location.hash === e.href ? (
                  <span>
                    <Dot size={40} />
                  </span>
                ) : (
                  <span>
                    <Dot size={40} color='black' />
                  </span>
                )}

                {e.label}
              </Link>
            )
          })}
        </div>
        <div className='flex gap-x-4 md:gap-x-8 start-4 justify-start ms-10'>
          {footerLinks.map((e) => {
            return (
              <a
                key={e.label}
                className='text-xs md:text-lg text-off-white hover:underline hover:underline-offset-4'
                href={e.href}
                target='_blank'
                rel='noopener noreferrer'
                onClick={onClosed}
              >
                {e.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default MenuDialog
