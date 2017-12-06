import React from 'react';

import Image from './Image.jsx';

import styles from '../styles/link.module.css';

class ImageDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderImage: false
    };

    this.handleClickToToggleImage = this.handleClickToToggleImage.bind(this);
    this.handleClickToCloseImage = this.handleClickToCloseImage.bind(this);
  }

  handleClickToToggleImage() {
    this.setState({
      renderImage: !this.state.renderImage
    });
  }

  handleClickToCloseImage() {
    this.setState({ renderImage: false });
  }

  render() {
    const { image, title } = this.props;

    return (
      <div>
        <h5
          style={{
            fontStyle: 'italic',
            cursor: 'pointer',
            display: 'inline-block'
          }}
          className={styles.title}
          onClick={this.handleClickToToggleImage}
        >
          {title}
        </h5>
        
        {this.state.renderImage ?
          <Image
            handleClickToCloseImage={this.handleClickToCloseImage}
            image={image}
            title={title} /> : null}
      </div>
    );
  }
}

export default ImageDescription;
