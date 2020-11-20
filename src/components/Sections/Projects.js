import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import StyledProjectsSection from "./Projects.styled";
import ProjectCard from '../ProjectCard/ProjectCard';


const Projects = () => {
  const { allMarkdownRemark: {edges: projects} } = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            live
            cover {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`);

  const renderProjects = projects.map((project) => {
    const { node: { frontmatter: { title, date, github, tech, apis, tools, cover }, excerpt } } = project;

    return (
      <ProjectCard key={title} {...project.node} />
      // <div className='card' key={title}>
      //   <h5>{title}</h5>
      //   <p>{excerpt}</p>
      // </div>
    )
  })

  return (
    <StyledProjectsSection id="portfolio">
      <h4>PORTFOLIO</h4>
      <div>
        {renderProjects}
      </div>
    </StyledProjectsSection>
  )
}

export default Projects;