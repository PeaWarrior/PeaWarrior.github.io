import React from 'react';
import { GlobalStyles } from '../styles/Global';
import { Layout, Hero, About, Skills, Projects, Blog, Contact } from '../components';

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  )
}
