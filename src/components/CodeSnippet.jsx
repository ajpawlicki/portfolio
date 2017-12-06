import React from 'react';

import styles from '../styles/link.module.css';

export default (props) => {
  const { html, github, handleClickToCloseSnippet } = props;
  
  return (
    <div>
      <h6>
        <span>Example:</span>
        <a
          className={styles.link}
          style={{ float: 'right' }}
          href={github}
          target="_blank">
            Check out on GitHub
        </a>
      </h6>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <h6>
        <span
          style={{ cursor: 'pointer' }}
          onClick={handleClickToCloseSnippet}>
          Close
        </span>
        <a
          className={styles.link}
          style={{ float: 'right' }}
          href={github}
          target="_blank">
            Check out on GitHub
        </a>
      </h6>
    </div>
  );
};
