import React from 'react';

import CodeSnippet from './CodeSnippet.jsx';

import linkStyles from '../styles/link.module.css';

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
            cursor: 'pointer',
            display: 'inline-block'
          }}
          className={linkStyles.title}
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
