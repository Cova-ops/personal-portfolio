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
  // 'https://twitter.com/cova50784'
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
          <h4>Meet Me: Your Back-End Development Partner</h4>
          <p>
            I'm Daniel Covarrubias, a dedicated <strong>back-end</strong> developer with a passion for crafting the hidden infrastructure that powers the digital world. With 2 years of experience in the field, I have honed my skills in creating <strong>efficient</strong>, <strong>secure</strong>, and <strong>scalable</strong> web applications. My journey as a developer has been marked by continuous learning, problem-solving, and a commitment to excellence.
          </p>
          <p>
            My commitment to precision, efficiency, and continuous improvement makes me a valuable asset for any <strong>web development</strong> project. I'm passionate about delivering results and exceeding expectations. Collaborating with me means tapping into a wealth of knowledge and experience to bring your ideas to <strong>life</strong>.
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
