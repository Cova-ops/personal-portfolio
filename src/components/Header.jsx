import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ name, sections }) => {
  return (
    <div>Header</div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  })).isRequired
}

export default Header
