import React from 'react';
import { Link } from 'gatsby';

import StyledProjectCard, { StyledImage } from './ProjectCard.styled';
import { SiGithub, SiYoutube } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectCard = ({ frontmatter: { title, date, github, tech, demo, live, cover }, excerpt }) => {
  const renderTech = tech.map(item => <li>{item}</li>);

  return (
    <>
    <StyledProjectCard>
      <StyledImage fixed={cover.childImageSharp.fixed} />
      <div className='content'>
        <h5>{title}</h5>
        <div className='card-body'>
          <p>{excerpt}</p>
          <ul>
            {renderTech}
          </ul>
          <div className='links'>
            <Link to={github}><SiGithub /></Link>
            {demo ? <Link to={demo}><SiYoutube /></Link> : null}
            {live ? <Link to={live}><HiOutlineExternalLink /></Link> : null}
          </div>
        </div>
      </div>
    </StyledProjectCard>
    </>
  )
}

export default ProjectCard;