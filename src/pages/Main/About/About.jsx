import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
// import PropTypes from 'prop-types'

// data
import { idSectionAbout } from '../../../data'

// assets
import imgMe from '../../../assets/image_yo.jpg'

import styles from './About.module.css'

// constants
const socialMedia = [
  'https://github.com/Cova-ops',
  'https://www.linkedin.com/in/daniel-covarrubias-a5b2b7191/'
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
    <section className={styles.container} id={idSectionAbout}>
      <div className={styles.information}>
        <div className={styles.avatar}>
          <img src={imgMe} alt='' />
          {/* <img src='https://cdn.dribbble.com/users/4543156/screenshots/14125478/media/cb000e6e6916abe4d76d3ad3d0cf3589.png' alt='' /> */}
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
          <h4>Meet Me: Senior Software Engineer / Technical Lead</h4>

          <p>
            I'm Daniel Covarrubias, a <strong>Senior Software Engineer</strong> and <strong>Technical Lead</strong> with
            <strong> over 4 years</strong> of professional experience building <strong>scalable backend systems</strong> and leading
            <strong> technical initiatives</strong> in <strong>production environments</strong>.
          </p>

          <p>
            I specialize in <strong>system architecture</strong>, <strong>cloud-native solutions</strong>, and
            <strong> high-availability platforms</strong>, with hands-on experience in <strong>Node.js</strong>,
            <strong> TypeScript</strong>, <strong>AWS</strong>, and <strong>distributed systems</strong>.
          </p>

          <p>
            Currently <strong>open to relocation to Germany</strong>.
          </p>
        </div>
      </div>

      <div className={styles.background__one}>
        {arrBackgroundOne}
      </div>
      <div className={styles.background__two}>
        {arrBackgroundTwo}
      </div>
    </section>
  )
}

About.propTypes = {}

export default About
