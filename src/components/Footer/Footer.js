import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

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
      <div className='links'>
        <a href={`mailto:${email}`} aria-label='email'><AiOutlineMail /></a>
        <a href={`https://github.com/${githubUsername}`} aria-label='github'><AiFillGithub /></a>
        <a href={`https://linkedin.com/in/${linkedinUsername}`} aria-label='linkedin'><AiFillLinkedin /></a>
        <a href={`https://twitter.com/${twitterUsername}`} aria-label='twitter'><AiFillTwitterCircle /></a>
        <a href={`https://medium.com/${mediumUsername}`} aria-label='medium'><AiFillMediumSquare /></a>
      </div>
      <p><AnchorLink to='/#hero' aria-label='hero'>Jackson Chen</AnchorLink> © 2020</p>
    </StyledFooter>
  )
};

export default Footer;
