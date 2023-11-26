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
          Full-Stack Software Engineer
        </span>
        <span className={styles.name}>
          Daniel Covarrubias
        </span>
        <span className={styles.desc}>
          Hello and welcome to my online portfolio. I'm a passionate and experienced back-end developer dedicated to creating robust and efficient web applications. With a strong foundation in programming, I specialize in crafting the unseen but vital components that power the digital world.
        </span>
        <RHButton className={styles.cv} text='Download CV' onClick={handleDownloadCV} />
      </div>
      <img src={avatar} alt='avatar' className={styles.avatar} />

    </div>
  )
}

Me.propTypes = {}

export default Me
