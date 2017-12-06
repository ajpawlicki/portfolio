import React from 'react';

import CodeSnippet from './CodeSnippet.jsx';

class EngineeringSkill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCodeSnippet: false
    };

    this.handleClickToToggleSnippet = this.handleClickToToggleSnippet.bind(this);
    this.handleClickToCloseSnippet = this.handleClickToCloseSnippet.bind(this);
  }

  handleClickToToggleSnippet() {
    this.setState({
      renderCodeSnippet: !this.state.renderCodeSnippet
    });
  }

  handleClickToCloseSnippet() {
    this.setState({ renderCodeSnippet: false });
  }

  render() {
    const { frontmatter, html } = this.props.skill;
    const { title, github } = frontmatter;

    return (
      <div>
        <h5
          style={{
            fontStyle: 'italic',
            color: '#ffd700',
            cursor: 'pointer',
            display: 'inline-block'
          }}
          onClick={this.handleClickToToggleSnippet}
        >
          {title}
        </h5>

        {this.state.renderCodeSnippet ?
          <CodeSnippet
            handleClickToCloseSnippet={this.handleClickToCloseSnippet}
            github={github}
            html={html} /> : null}
      </div>
    );
  }
}

export default EngineeringSkill;