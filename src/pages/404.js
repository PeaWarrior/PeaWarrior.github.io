import React from 'react';
import { GlobalStyles } from '../styles/Global';
import { Layout } from '../components';
import StyledPageNotFoundSection from '../components/Sections/PageNotFound';

const error = () => {
  return (
    <Layout>
      <GlobalStyles />
      <StyledPageNotFoundSection />
      
    </Layout>
  )
}

export default error;