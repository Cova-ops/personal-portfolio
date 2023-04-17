import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  position: string,
  company: string
}

const ExperienceCard = ({ position, company }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center'
        src='img/logo_xira.png'
        alt=''
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{position}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-sm'
            src='img/logo_js.png'
            alt=''
          />
        </div>

        <p className='uppercase py-5 text-gray-300'>

        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
        </ul>

      </div>

    </article>
  )
}

export default ExperienceCard
