import React from 'react';

import StyledProjectCard, { StyledImage } from './ProjectCard.styled';
import { SiGithub, SiYoutube } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectCard = ({ frontmatter: { title, date, github, tech, demo, live, cover }, excerpt }) => {
  const renderTech = tech.map((item, index) => <li key={index} >{item}</li>);

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
            <a href={github} aria-label='github'><SiGithub /></a>
            {demo ? <a href={demo} aria-label='demo'><SiYoutube /></a> : null}
            {live ? <a href={live} aria-label='live'><HiOutlineExternalLink /></a> : null}
          </div>
        </div>
      </div>
    </StyledProjectCard>
    </>
  )
}

export default ProjectCard;