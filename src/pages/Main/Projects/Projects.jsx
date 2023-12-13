import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHCard } from '../../../components'

// data
import { idSectionProjects } from '../../../data'

// assets
import imgPokedex from '../../../assets/pokedex.jpg'
import imgWebMirrorX from '../../../assets/webmirrorx.jpg'
import imgCV from '../../../assets/cv.jpg'

import styles from './Projects.module.css'

// constants
const projects = [
  {
    title: 'PokeDex',
    description: 'Explore the fascinating world of Pokémon through our interactive Pokédex simulation. Immerse yourself in a comprehensive collection of Pokémon information, from basic details to advanced stats. Our user-friendly interface allows you to search and discover various Pokémon species, including their types, abilities, and evolutions.',
    image: imgPokedex,
    url: 'https://pokedex.dacovasan.dev'
  },
  {
    title: 'WebMirrorX: Figma Challenge',
    description: <>WebMirrorX meets the Figma Challenge, seamlessly translating design vision into a vibrant web reality. Explore the result <a href='https://www.figma.com/file/gHf56mhtFr0lXky0poofoQ/ejam---Clarifion-Upsell-%5B-Client-V-%5D-(Copy)?type=design&node-id=1-2&mode=design&t=EBGbUqXJou8I8vsK-0' rel='noreferrer' target='_blank'>here</a>, where Figma's style comes to life with creativity and precision.</>,
    image: imgWebMirrorX,
    url: 'https://ejam.dacovasan.dev'
  },
  {
    title: 'Curriculum Vitae',
    description: 'Discover my professional journey through an innovative interactive CV. This project presents my work experience uniquely. Dive in for a visually appealing overview and download my CV for a detailed look at my skills, achievements, and aspirations. Welcome to a modern presentation of my career!',
    image: imgCV,
    url: 'https://cv.dacovasan.dev'
  }
]
const Projects = props => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section className={styles.container} id={idSectionProjects}>
      <h2>
        <span className={styles.blue}>&gt;</span>
        Projects
      </h2>
      <div className={styles.cards__container}>
        {
          projects.map((project, index) => (
            <RHCard key={`project${index}`}>
              <img src={project.image} alt='' onClick={() => handleClick(project.url)} />
              <h2 onClick={() => handleClick(project.url)}>{project.title}</h2>
              <p>{project.description}</p>
            </RHCard>
          ))
        }
      </div>
    </section>
  )
}

Projects.propTypes = {}

export default Projects
