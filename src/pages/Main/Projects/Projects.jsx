import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHCard } from '../../../components'

// data
import { idSectionProjects } from '../../../data'

// assets
import imgPokedex from '../../../assets/pokedex.jpg'
import imgAnkiSentences from '../../../assets/anki_sentences.png'
import imgCV from '../../../assets/cv.jpg'

import styles from './Projects.module.css'

// constants
const projects = [
  {
    title: 'Anki Sentences',
    description:
  <>
    <p>
      <strong>Rust-based CLI tool</strong> for automating Anki content creation.
      Supports <strong>CSV/JSON import/export</strong>, <strong>TOML configuration</strong>,
      <strong>MP3 audio generation</strong> via external <strong>TTS REST APIs</strong>,
      and local persistence with <strong>SQLite</strong>.
    </p>
    <p>
      Built with a <strong>modular, layered architecture</strong>, using an
      <strong>asynchronous message queue</strong> to decouple audio processing and a
      custom lightweight ORM crate (<strong>sql-model</strong>) to keep dependencies
      minimal and data models explicit.
    </p>
  </>,
    image: imgAnkiSentences,
    url: 'https://github.com/Cova-ops/anki-sentences'
  },
  {
    title: 'PokeDex',
    description: 'Explore the fascinating world of Pokémon through our interactive Pokédex simulation. Immerse yourself in a comprehensive collection of Pokémon information, from basic details to advanced stats. Our user-friendly interface allows you to search and discover various Pokémon species, including their types, abilities, and evolutions.',
    image: imgPokedex,
    url: 'https://pokedex.dacovasan.dev'
  },
  {
    title: 'Curriculum Vitae',
    description: 'Discover my professional journey through an innovative interactive CV. This project presents my work experience uniquely. Dive in for a visually appealing overview and download my CV for a detailed look at my skills, achievements, and aspirations. Welcome to a modern presentation of my career!',
    image: imgCV,
    url: 'https://cv.dacovasan.dev/de'
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
