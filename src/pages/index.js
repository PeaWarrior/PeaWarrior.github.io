import React from "react"
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Construction from '../components/Construction'

export default function Home() {
  const Global = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
    }
    body {
      margin: 0;
    }
  `
  return (
    <Layout>
      <Global />
      <Hero />
      <Construction>This site is under construction!</Construction>
    </Layout>
  )
}
