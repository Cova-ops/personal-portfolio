import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
