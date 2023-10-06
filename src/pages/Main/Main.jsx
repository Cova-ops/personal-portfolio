import React from 'react'
// components
import Page from '../../components/Page/Page'

// sections
import Header from './Header/Header'
import Me from './Me/Me'
import About from './About/About'

import styles from './Main.module.css'

// ----------------------------------------------------------------------

export default function Main () {
  return (
    <Page title='Portfolio' className={styles.page}>

      <Header
        name='Daniel Covarrubias'
      />

      <Me />

      <About />

    </Page>
  )
}
