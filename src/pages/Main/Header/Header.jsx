import React from 'react'
import PropTypes from 'prop-types'

// data
import { idSectionAbout, idSectionContact, idSectionExperience, idSectionProjects, idSectionSkills } from '../../../data'

import styles from './Header.module.css'

// constants
const Links = [
  { name: 'About', id: idSectionAbout },
  { name: 'Projects', id: idSectionProjects },
  { name: 'Skills', id: idSectionSkills },
  { name: 'Experience', id: idSectionExperience },
  { name: 'Contact', id: idSectionContact }
]

// ----------------------------------------------------------------------

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <span>
        <span className={styles.blue}>&lt;</span>
        {name}
        <span className={styles.blue}> /&gt;</span>
      </span>
      <div>
        {
          Links.map((link) => (
            <a href={`#${link.id}`} key={link.id} className={styles.link}>
              {link.name}
            </a>
          ))
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header
