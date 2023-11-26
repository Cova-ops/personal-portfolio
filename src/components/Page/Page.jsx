import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{title}</title>
      {meta}
    </Helmet>

    <div ref={ref} {...other}>
      {children}
    </div>
  </>
))

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node
}

export default Page
