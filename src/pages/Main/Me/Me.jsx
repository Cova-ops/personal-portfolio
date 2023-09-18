import React from 'react'
// import PropTypes from 'prop-types'

// components
import { RHButton } from '../../../components'

// assets
import avatar from '../../../assets/avatar.svg'
import styles from './Me.module.css'

function Me (props) {
  return (
    <div className={styles.me} id='Me'>
      <div className={styles.background} />

      <div className={styles.information}>
        <span className={styles.role}>
          Full-Stack Software Engineer
        </span>
        <span className={styles.name}>
          Daniel Covarrubias
        </span>
        <span className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quae placeat necessitatibus quidem ipsam alias dolores ex illo harum voluptas temporibus ab nisi libero beatae veritatis atque molestiae aliquam saepe.
        </span>
        <RHButton text='Download CV' />
      </div>
      <img src={avatar} alt='avatar' className={styles.avatar} />

    </div>
  )
}

Me.propTypes = {}

export default Me
