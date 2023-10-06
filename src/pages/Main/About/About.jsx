import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import { SocialIcon } from 'react-social-icons'

// data
import { idSectionAbout } from '../../../data'

import styles from './About.module.css'

// constants

const socialMedia = [
  'https://github.com/Cova-ops',
  'https://www.linkedin.com/in/daniel-covarrubias-a5b2b7191/',
  'https://twitter.com/cova50784'
]

// ----------------------------------------------------------------------

const About = () => {
  const [arrBackgroundOne, setArrBackgroundOne] = useState([])
  const [arrBackgroundTwo, setArrBackgroundTwo] = useState([])

  const loadBackgroundOne = () => {
    const arr = []
    for (let i = 0; i < 21; i++) {
      const marginTop = Math.floor(Math.random() * 100) + 'px'
      const marginBottom = Math.floor(Math.random() * 100) + 'px'

      arr.push(
        <div
          className={styles.div__brackground__one}
          key={`div__background_one${i}`}
          style={{ marginTop, marginBottom }}
        />)
    }
    setArrBackgroundOne(arr)
  }

  const loadBackgroundTwo = () => {
    const arr = []
    for (let i = 0; i < 11; i++) {
      const marginTop = Math.floor(Math.random() * 150 + 50) + 'px'
      const marginBottom = Math.floor(Math.random() * 150 + 50) + 'px'

      arr.push(
        <div
          className={styles.div__brackground__two}
          key={`div__background_two${i}`}
          style={{ marginTop, marginBottom }}
        />)
    }
    setArrBackgroundTwo(arr)
  }

  useEffect(() => {
    loadBackgroundOne()
    loadBackgroundTwo()
  }, [])

  return (
    <div className={styles.container} id={idSectionAbout}>
      <div className={styles.information}>
        <div className={styles.avatar}>
          <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' />
          <h2>Daniel Covarrubias</h2>
          <div className={styles.media}>
            {
              socialMedia.map((media) => (<SocialIcon url={media} fgColor='#5AFFEE' bgColor='#222a36' target='_blank' style={{ width: '70px', height: '70px' }} key={media} />))
            }
          </div>
        </div>
        <div className={styles.about}>
          <h2>
            <span className={styles.blue}>&gt;</span>
            About
          </h2>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae commodi voluptas ex unde corporis sunt, repellendus asperiores earum iusto repudiandae assumenda ipsa, quod aspernatur? Error, mollitia? Id, recusandae dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sed doloribus adipisci rerum commodi praesentium officia recusandae libero corrupti, voluptates quos neque, veritatis dolore aut harum, expedita illum nesciunt? Nesciunt.
          </p>
        </div>
      </div>

      <div className={styles.background__one}>
        {arrBackgroundOne}
      </div>
      <div className={styles.background__two}>
        {arrBackgroundTwo}
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
