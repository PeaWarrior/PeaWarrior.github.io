import React from 'react';
import { Link } from 'gatsby';

import StyledProjectCard from './ProjectCard.styled';
import { SiGithub, SiYoutube } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ProjectCard = ({ frontmatter: { title, date, github, tech, live, cover }, excerpt }) => {
  const renderTech = tech.map(item => <li>{item}</li>)

  return (
    <StyledProjectCard>
      <h5>{title}</h5>
      
      <div>
        <p>{excerpt}</p>
        <ul>
          {renderTech}
        </ul>
        <div>
          <Link to={github}><SiGithub fill='#84DCC6' /></Link>
          <Link to=''><SiYoutube fill='#84DCC6'/></Link>
          {live ? <Link to=''><HiOutlineExternalLink stroke='#84DCC6' /></Link> : null}
        </div>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard;