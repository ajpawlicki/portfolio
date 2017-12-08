import React from 'react';

import Image from './Image.jsx';

import linkStyles from '../styles/link.module.css';

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
    const { image, title, description } = this.props;

    return (
      <div>
        <div
          className={this.state.renderImage ? linkStyles['title-fixed'] : linkStyles.title}
          onClick={this.handleClickToToggleImage}
          style={{ cursor: 'pointer', display: 'inline' }}
        >
          <h5
            style={{
              fontStyle: 'italic',
              display: 'inline-block'
            }}
          >
            {title}:
          </h5>

          <span
            style={{
              margin: '0 1rem 1rem 1rem',
              fontSize: '14px',
              display: 'inline-block'
            }}
          >
            {description}
          </span>
        </div>
        
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
