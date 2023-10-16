import React from 'react'
// components
import Page from '../../components/Page/Page'

// sections
import Header from './Header/Header'
import Me from './Me/Me'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

import styles from './Main.module.css'
import Contact from './Contact/Contact'

// ----------------------------------------------------------------------

export default function Main () {
  return (
    <Page title='Portfolio' className={styles.page}>

      <Header
        name='Daniel Covarrubias'
      />

      <Me />

      <About />

      <Projects />

      <Skills />

      <Contact />

    </Page>
  )
}
