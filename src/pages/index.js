import React from "react"
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/Layout'

export default function Home() {
  const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
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
      Hello world!
    </Layout>
  )
}
