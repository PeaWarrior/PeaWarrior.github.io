import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledFooter from './Footer.styled';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterCircle,
  AiOutlineMail
} from 'react-icons/ai';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
          linkedinUsername
          mediumUsername
          githubUsername
          email
        }
      }
    }
  `);

  const {site: { siteMetadata: { twitterUsername, githubUsername, linkedinUsername, mediumUsername, email } }} = data;

  return (
    <StyledFooter>
      <div>
        <a href={`mailto:${email}`}><AiOutlineMail /></a>
        <a href={`https://github.com/${githubUsername}`}><AiFillGithub /></a>
        <a href={`https://linkedin.com/in/${linkedinUsername}`}><AiFillLinkedin /></a>
        <a href={`https://twitter.com/${twitterUsername}`}><AiFillTwitterCircle /></a>
        <a href={`https://medium.com/${mediumUsername}`}><AiFillMediumSquare /></a>
      </div>
      <p>Copyright © Jackson Chen 2020</p>
    </StyledFooter>
  )
};

export default Footer;
