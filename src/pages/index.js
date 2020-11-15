import React from 'react';
import { GlobalStyles } from '../styles/Global';
import { Layout, Hero, About } from '../components';

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <About />
    </Layout>
  )
}
