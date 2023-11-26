import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHCard } from '../../../components'

// data
import { idSectionProjects } from '../../../data'

// assets
import Pokedex from '../../../assets/pokedex.jpg'

import styles from './Projects.module.css'

// constants
const projects = [
  {
    title: 'PokeDex',
    description: 'Explore the fascinating world of Pokémon through our interactive Pokédex simulation. Immerse yourself in a comprehensive collection of Pokémon information, from basic details to advanced stats. Our user-friendly interface allows you to search and discover various Pokémon species, including their types, abilities, and evolutions.',
    image: Pokedex,
    url: 'https://pokedex.dacovasan.dev'
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
            <RHCard key={`project${index}`} onClick={() => handleClick(project.url)}>
              <img src={project.image} alt='' />
              <h2>{project.title}</h2>
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
