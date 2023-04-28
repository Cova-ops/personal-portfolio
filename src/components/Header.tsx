import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { social } from '../pages/api/api.type'

type Props = {
  socials: social[]
}

const Header = ({ socials }: Props) => {

  const [statusWindow, setStatusWindow] = useState(false)

  useEffect(() => { setStatusWindow(true) }, [])

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>

        {socials.map((item, idx) => (
          <SocialIcon
            url={item.url}
            key={idx}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}

      </motion.div>

      <Link href='#contact'>
        {
          statusWindow ?
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className='flex flex-row items-center text-gray-300 cursor-pointer'>

              <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </motion.div> : null
        }
      </Link>

    </header>
  )
}

export default Header
