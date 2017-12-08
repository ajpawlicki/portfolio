import React from 'react';

import linkStyles from '../styles/link.module.css';

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
        <h6>
          <span
            className={linkStyles.anchor}
            style={{ cursor: 'pointer' }}
            onClick={handleClickToCloseImage}>
            Close
          </span>
        </h6>
    </div>
  );
};
