import React from 'react';
import { Link } from 'gatsby';

import StyledPageNotFoundSection from './PageNotFound.styled';

const PageNotFoundSection = () => {
  return (
    <StyledPageNotFoundSection>
      <div className='error'>
        <h4>404</h4>
        <p>The page you're looking for does not exist.</p>
      </div>
      <Link to='/' aria-label='home'>Go Home</Link>
    </StyledPageNotFoundSection>
  )
}

export default PageNotFoundSection;