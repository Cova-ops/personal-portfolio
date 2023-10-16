import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHCard } from '../../../components'

// data
import { idSectionProjects } from '../../../data'

import styles from './Projects.module.css'

const Projects = props => {
  return (
    <section className={styles.container} id={idSectionProjects}>
      <h2>
        <span className={styles.blue}>&gt;</span>
        Projects
      </h2>
      <div className={styles.cards__container}>
        <RHCard>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quod, obcaecati pariatur quae, harum sequi molestias impedit nobis magnam illum nam eaque qui soluta quasi laudantium quaerat reprehenderit nisi.</p>
        </RHCard>
        <RHCard>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quod, obcaecati pariatur quae, harum sequi molestias impedit nobis magnam illum nam eaque qui soluta quasi laudantium quaerat reprehenderit nisi.</p>
        </RHCard>
        <RHCard>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quod, obcaecati pariatur quae, harum sequi molestias impedit nobis magnam illum nam eaque qui soluta quasi laudantium quaerat reprehenderit nisi.</p>
        </RHCard>
        <RHCard>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quod, obcaecati pariatur quae, harum sequi molestias impedit nobis magnam illum nam eaque qui soluta quasi laudantium quaerat reprehenderit nisi.</p>
        </RHCard>
        <RHCard>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quod, obcaecati pariatur quae, harum sequi molestias impedit nobis magnam illum nam eaque qui soluta quasi laudantium quaerat reprehenderit nisi.</p>
        </RHCard>
      </div>
    </section>
  )
}

Projects.propTypes = {}

export default Projects
