import React from 'react';

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
            style={{ cursor: 'pointer' }}
            onClick={handleClickToCloseImage}>
            Close
          </span>
        </h6>
    </div>
  );
};
