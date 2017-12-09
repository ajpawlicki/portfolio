import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/home-page.module.css'

import EngineeringSkill from '../components/EngineeringSkill.jsx';
import ImageDescription from '../components/ImageDescription.jsx';

import systemDesignDiagram from '../assets/images/reddit-reader-system-design-diagram.png';
import schemaDesignDiagram from '../assets/images/salesforce-compensation-schema-design-diagram.png';

const IndexPage = (props) => {
  const { edges } = props.data.allMarkdownRemark;
  const [
    javaScriptMarkdown,
    reactMarkdown,
    cssMarkdown,
    serverSideJavaScriptMarkdown,
    sqlMarkdown,
    nosqlMarkdown,
    unitTestsMarkdown
  ] = edges;

  return (
    <div>
      <div className={styles.intro} style={{ margin: '3rem auto', maxWidth: '600px', textAlign: 'center' }}>
        <p>Here are a few quick examples to give you an idea of my software engineering skills (click for more info):</p>
      </div>
      
      <h3 style={{ color: '#4169e1' }}>Front-End</h3>
      <div>
        <EngineeringSkill skill={javaScriptMarkdown.node} />
        <EngineeringSkill skill={reactMarkdown.node} />
        <EngineeringSkill skill={cssMarkdown.node} />
      </div>
  
      <h3 style={{ color: '#4169e1' }}>Back-End</h3>
      <div>
        <EngineeringSkill skill={serverSideJavaScriptMarkdown.node} />
        <EngineeringSkill skill={sqlMarkdown.node} />
        <EngineeringSkill skill={nosqlMarkdown.node} />
      </div>

      <h3 style={{ color: '#4169e1' }}>Tools</h3>
      <div>
        <EngineeringSkill skill={unitTestsMarkdown.node} />
      </div>

      <h3 style={{ color: '#4169e1' }}>Diagrams</h3>
      <div>
        <ImageDescription
          image={systemDesignDiagram}
          title="System Design"
          description="Constructed a front-end system that queries an external API for data that is then rendered in React components." />
        <ImageDescription
          image={schemaDesignDiagram}
          title="Schema Design"
          description="Created efficient schema design with denormalized data based off type of relationship between tables." />
      </div>
    </div>
  );
};

export default IndexPage

export const query = graphql`
  query AssetsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}) {
      edges {
        node {
          frontmatter {
            title
            order
            github
            description
          }
          html
        }
      }
    }
  }
`
