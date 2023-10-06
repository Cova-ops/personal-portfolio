import React from 'react'
import PropTypes from 'prop-types'

// data
import { idSectionAbout, idSectionContact, idSectionExperience, idSectionProjects, idSectionSkills } from '../../../data'

import styles from './Header.module.css'

// constants
const Links = [
  { name: 'About', id: idSectionAbout },
  { name: 'Experience', id: idSectionExperience },
  { name: 'Skills', id: idSectionSkills },
  { name: 'Projects', id: idSectionProjects },
  { name: 'Contact', id: idSectionContact }
]

// ----------------------------------------------------------------------

const Header = ({ name }) => {
  return (
    <div id='Header' className={styles.header}>
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
          )
          )
        }
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header
