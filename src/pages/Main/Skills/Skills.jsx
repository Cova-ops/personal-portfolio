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
      <div className={styles.section_skills}>
        <h3>Languages</h3>
        <div className={styles.skills__container}>
          {
            skills.filter(skill => skill.section === 'Languages').map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))
          }
        </div>

      </div>

      <div className={styles.section_skills}>
        <h3>Backend</h3>
        <div className={styles.skills__container}>
          {
            skills.filter(skill => skill.section === 'Backend').map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.section_skills}>
        <h3>Frontend</h3>
        <div className={styles.skills__container}>
          {
            skills.filter(skill => skill.section === 'Frontend').map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.section_skills}>
        <h3>Cloud & DevOps</h3>
        <div className={styles.skills__container}>
          {
            skills.filter(skill => skill.section === 'Cloud & DevOps').map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.section_skills}>
        <h3>Architecture & Leadership</h3>
        <div className={styles.skills__container}>
          {
            skills.filter(skill => skill.section === 'Architecture & Leadership').map((skill) => (
              <div className={styles.skill} key={`skill_${skill.name}`}>
                <span>{skill.name}</span>
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

Skills.propTypes = {}

export default Skills
