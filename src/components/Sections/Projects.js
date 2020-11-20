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
            demo
            live
            cover {
              childImageSharp {
                fixed(width: 300) {
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

  const renderProjects = projects.map((project) => <ProjectCard key={project.node.frontmatter.title} {...project.node} />)

  return (
    <StyledProjectsSection id="projects">
      <h4>PROJECTS</h4>
      <div>
        {renderProjects}
      </div>
    </StyledProjectsSection>
  )
}

export default Projects;