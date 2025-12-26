import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHButton } from '../../../components'

// assets
import avatar from '../../../assets/avatar.svg'
import styles from './Me.module.css'

function Me () {
  const handleDownloadCV = () => {
    const filePath = '/CV.pdf' // Ruta del archivo en la carpeta "public"
    const downloadLink = document.createElement('a')
    downloadLink.href = filePath
    // downloadLink.href = process.env.PUBLIC_URL + filePath
    downloadLink.download = 'CV.pdf' // Nombre del archivo descargado
    downloadLink.click()
  }

  return (
    <div className={styles.me}>
      <div className={styles.background} />

      <div className={styles.information}>
        <span className={styles.role}>
          Senior Software Engineer / Technical Lead
          Backend & Distributed Systems | Cloud & Architecture
        </span>
        <span className={styles.name}>
          Daniel Covarrubias Sanchez
        </span>
        <span className={styles.desc}>
          I design and build scalable backend systems used in production
          by high-volume platforms. Experienced in cloud-native architectures,
          microservices, and leading engineering teams.

        </span>

        <span className={styles.desc}>
          Currently open to relocation to Germany.
        </span>
        <RHButton className={styles.cv} text='Download CV' onClick={handleDownloadCV} />
      </div>
      <img src={avatar} alt='avatar' className={styles.avatar} />

    </div>
  )
}

Me.propTypes = {}

export default Me
