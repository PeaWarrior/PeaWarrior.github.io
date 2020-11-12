import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Construction from '../components/Construction'
import Menu from '../components/Menu/Menu'
import { GlobalStyles } from '../styles/Global'

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <Construction>This site is under construction!</Construction>
    </Layout>
  )
}
