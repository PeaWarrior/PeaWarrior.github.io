import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledFooter from './Footer.styled';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
        }
      }
    }
  `);

  const {site: { siteMetadata: { twitterUsername } }} = data;

  return (
    <StyledFooter>
      <a href={`https://twitter.com/${twitterUsername}`}><AiFillTwitterCircle /></a>
      <a href={`https://linkedin.com/in/${twitterUsername}`}><AiFillLinkedin /></a>
      <AiFillGithub />
      <AiFillMediumSquare />
    </StyledFooter>
  )
};

export default Footer;
