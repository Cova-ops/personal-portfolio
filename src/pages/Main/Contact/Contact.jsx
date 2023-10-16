import React from 'react'
import { SocialIcon } from 'react-social-icons'
// import PropTypes from 'prop-types'

// data
import { idSectionContact } from '../../../data'

import styles from './Contact.module.css'

// constants
const Links = [
  { url: 'https://github.com/Cova-ops', string: 'github.com/Cova-ops' },
  { url: 'mailto:dacovasan00@gmail.com?subject=Asunto del correo&body=Contenido del mensaje', string: 'dacovasan00@gmail.com' },
  { url: 'https://www.linkedin.com/in/daniel-covarrubias-a5b2b7191/', string: 'linkedin.com/daniel-covarrubias' },
  { url: 'https://twitter.com/cova50784', string: 'twitter.com/daniel-covarrubias' }
]

// ----------------------------------------------------------------------

const Contact = () => {
  return (
    <section className={styles.container} id={idSectionContact}>
      <h2>
        <span className={styles.blue}>&gt;</span>
        Get in Touch
      </h2>

      <div className={styles.body__container}>
        <p>
          I'm excited to connect with you and discuss how we can work together to achieve your web development goals. Whether you have a project in mind, need assistance with an existing system, or simply want to explore the possibilities, I'm here to help.
          Feel free to reach out via the contact information provided below, and I'll get back to you as soon as possible. I'm open to inquiries, collaboration opportunities, and any questions you may have. Let's start the conversation and turn your ideas into reality.
        </p>

        <div className={styles.contact__links}>
          {
            Links.map((link) => (
              <div key={link.url}>
                <SocialIcon url={link.url} fgColor='#5AFFEE' bgColor='#181E26' target='_blank' rel='noreferrer' style={{ width: '70px', height: '70px' }} />
                <a href={link.url} target='_blank' rel='noreferrer'>{link.string}</a>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

Contact.propTypes = {}

export default Contact
