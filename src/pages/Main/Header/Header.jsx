import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.css'

// constants
const Links = [
  { name: 'About', id: 'About' },
  { name: 'Experience', id: 'Experience' },
  { name: 'Skills', id: 'Skills' },
  { name: 'Projects', id: 'Projects' },
  { name: 'Contact', id: 'Contact' }
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
