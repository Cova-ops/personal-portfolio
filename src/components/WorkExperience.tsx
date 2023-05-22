import React from 'react'
import { motion } from 'framer-motion'

import { ExperienceCard } from './'
import { experience } from '../pages/api/api.type'

type Props = {
  experiences: experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        Experience
      </h3>

      <div className='relative w-full h-full pt-48 flex justify-center space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

        {experiences.map((item, idx) => (
          <ExperienceCard key={idx} experience={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
