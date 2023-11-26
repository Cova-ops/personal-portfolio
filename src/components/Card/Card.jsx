import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const Card = ({ children, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default Card
