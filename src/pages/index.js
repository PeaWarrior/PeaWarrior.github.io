import React from 'react';
import { GlobalStyles } from '../styles/Global';
import { Layout, Hero, About } from '../components';
import Construction from '../components/Construction';

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <Construction>This site is under construction!</Construction>
      <About />
    </Layout>
  )
}
