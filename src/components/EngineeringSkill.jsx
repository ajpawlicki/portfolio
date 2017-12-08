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
    const { title, github, description } = frontmatter;

    return (
      <div>
        <div
          className={this.state.renderCodeSnippet ? linkStyles['title-fixed'] : linkStyles.title}
          onClick={this.handleClickToToggleSnippet}
          style={{ cursor: 'pointer', display: 'inline' }}
        >
          <h5
            style={{
              fontStyle: 'italic',
              display: 'inline-block',
            }}
          >
            {title}:
          </h5>

          <span
            style={{
              margin: '0 1rem 1rem 1rem',
              fontSize: '14px',
              display: 'inline-block',
            }}
          >
            {description}
          </span>
        </div>

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
