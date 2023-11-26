import React from 'react'
// import PropTypes from 'prop-types'

// data
import { idSectionSkills, arrSkills as skills } from '../../../data'

import styles from './Skills.module.css'

// ----------------------------------------------------------------------

const Skills = props => {
  return (
    <section className={styles.container} id={idSectionSkills}>
      <h2>
        <span className={styles.blue}>&gt;</span>
        Skills
      </h2>
      <div className={styles.skills__container}>
        {
            skills.map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
                <div className={styles.skill__progress}>
                  <div
                    className={styles.skill__progress__bar}
                    style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))
          }
      </div>
    </section>
  )
}

Skills.propTypes = {}

export default Skills
