import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { pageInfo } from '../pages/api/api.type.ts'

type Props = {
  pageInfo: pageInfo
}

const Hero = ({ pageInfo }: Props) => {

  const [text, _] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo.name}`,
      'Guy-who-loves-Coffee.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

      <BackgroundCircles />

      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={pageInfo.heroImage}
        alt=''
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>

      <div className='pt-5 z-20'>
        <Link href='#about'>
          <button className='heroButton'>About</button>
        </Link>

        <Link href='#experience'>
          <button className='heroButton'>Experience</button>
        </Link>

        <Link href='#skills'>
          <button className='heroButton'>Skills</button>
        </Link>

        <Link href='#projects'>
          <button className='heroButton'>Projects</button>
        </Link>
      </div>

    </div>
  )
}

export default Hero
