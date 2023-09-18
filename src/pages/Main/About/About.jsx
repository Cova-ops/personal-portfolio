import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import styles from './About.module.css'

const About = props => {
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
    <div className={styles.container} id='About'>
      <div className={styles.information}>
        <div className={styles.avatar}>
          <img src='' alt='' />
          <span>name</span>
          <div className={styles.media}>
            links
          </div>
        </div>
        <div className={styles.about}>
          <h4>About</h4>
          <h5>Lorem ipsum dolor sit amet
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae commodi voluptas ex unde corporis sunt, repellendus asperiores earum iusto repudiandae assumenda ipsa, quod aspernatur? Error, mollitia? Id, recusandae dolorem.</p>
          </h5>
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
