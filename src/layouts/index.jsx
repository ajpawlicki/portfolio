import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import linkStyles from '../styles/link.module.css';

require("prismjs/themes/prism-okaidia.css");

const Header = () => (
  <div
    style={{
      background: '#4169e1',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          className={linkStyles.header}
        >
          Aloysius Pawlicki
        </Link>
      </h3>
      
      <ul style={{ float: 'right', listStyle: 'none' }}>
        <li style={{ display: 'inline-block', marginRight: '1rem' }}>
          <Link to="/" className={linkStyles.header}>
            Home
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '1rem' }}>
          <Link to="/contact/" className={linkStyles.header}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Aloysius' Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
