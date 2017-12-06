import React from 'react';

import Image from './Image.jsx';

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
            color: '#ffd700',
            cursor: 'pointer',
            display: 'inline-block'
          }}
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
