'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const path = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav className='absolute z-50 top-3 lg:top-[26px] p-4 sm:px-20 w-full flex justify-between items-center bg-transparent'>
      <Link href={'/'} className='text-xs md:text-lg font-medium'>
        @Yosef Situmorang
      </Link>
      <div className='flex gap-x-5 md:gap-10'>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`text-xs md:text-lg hover:underline hover:underline-offset-4 ${
              isMounted && path === href ? 'font-bold' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
