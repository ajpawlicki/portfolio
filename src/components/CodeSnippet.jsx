import React from 'react';

import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

export default (props) => {
  const { html, github, handleClickToCloseSnippet } = props;
  
  return (
    <div>
      <h6 style={{ marginBottom: '1rem' }}>
        <span>Example:</span>
        <a
          className={linkStyles.anchor}
          style={{ float: 'right' }}
          href={github}
          target="_blank">
            {feather('github', [25, 25], iconStyles['expand-icon'])}
        </a>
      </h6>

      <div dangerouslySetInnerHTML={{ __html: html }} />
      
      <div style={{ marginBottom: '1rem' }}>
        <div
          className={linkStyles.anchor}
          style={{ cursor: 'pointer', display: 'inline-block' }}
          onClick={handleClickToCloseSnippet}
        >
          {feather('minus-circle', [25, 25], iconStyles['expand-icon'])}
        </div>
        
        <a
          className={linkStyles.anchor}
          style={{ float: 'right' }}
          href={github}
          target="_blank">
            {feather('github', [25, 25], iconStyles['expand-icon'])}
        </a>
      </div>
    </div>
  );
};
