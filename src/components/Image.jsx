import React from 'react';

import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

export default (props) => {
  const { image, title, handleClickToCloseImage } = props;
  
  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{
          border: '3px solid black',
          borderRadius: '5px',
          marginBottom: '0'
        }}/>
        <div style={{ marginBottom: '1rem' }}>
          <div
            className={linkStyles.anchor}
            style={{ cursor: 'pointer', display: 'inline-block' }}
            onClick={handleClickToCloseImage}
          >
            {feather('minus-circle', [25, 25], iconStyles['expand-icon'])}
          </div>
        </div>
    </div>
  );
};
