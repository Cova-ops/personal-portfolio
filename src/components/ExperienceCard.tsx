import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../pages/api/api.type'

type Props = {
  experience: experience
}

const ExperienceCard = ({ experience }: Props) => {
  { console.log(experience.companyImage) }
  return (
    <article className='h-screen flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] max-h-[650px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full xl:w-[180px] xl:h-[180px] object-contain object-center'
        src={experience.companyImage}
        alt=''
      />


      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((item, idx) => (
            <img
              key={idx}
              className='h-8 w-8 rounded-sm'
              src={item.image}
              alt=''
            />
          ))}
        </div>

        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} - {" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc max-h-[50%] space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience.points.map((item, idx) => (
            <li key={idx}>- {item}</li>
          ))}
        </ul>

      </div>

    </article>
  )
}

export default ExperienceCard
