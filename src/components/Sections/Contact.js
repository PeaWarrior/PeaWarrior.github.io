import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledContactSection from './Contact.styled';

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const {site: { siteMetadata: { email } }} = data;

  return (
    <StyledContactSection id='contact'>
      <h2>CONTACT</h2>
      <h5>
        Have a question or want to work together?
      </h5>
      <a href={`mailto:${email}`} aria-label='email'>Let's Talk</a>
    </StyledContactSection>
  )
}

export default Contact
