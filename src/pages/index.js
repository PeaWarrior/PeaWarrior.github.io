import React from 'react';
import { Layout, About } from '../components';
import Hero from '../components/Hero';
import Construction from '../components/Construction';
import { GlobalStyles } from '../styles/Global';

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
