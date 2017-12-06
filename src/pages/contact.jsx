import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/link.module.css';

const ContactPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: '600px', textAlign: 'center' }}>
    <p>Email me at <a href="mailto:aloysiuspaw@gmail.com" target="_blank" className={styles.link}>aloysiuspaw@gmail.com</a>.</p>
    <p> Check out my <a href="https://github.com/ajpawlicki" target="_blank" className={styles.link}>GitHub</a>.</p>
    <p>Connect with me on <a href="https://www.linkedin.com/in/ajpawlicki/" target="_blank" className={styles.link}>LinkedIn</a>.</p>
    <p>Go back to the <Link to="/" className={styles.link}>homepage</Link>.</p>
  </div>
)

export default ContactPage;
