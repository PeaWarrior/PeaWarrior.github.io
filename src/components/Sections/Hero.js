import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql } from "gatsby"

import StyledHeroSection from "./Hero.styled"
import { StyledImage } from "./Hero.styled"

const Hero = () => {
  const [state, setState] = useState(false)

  const heroImage = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "hero.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const timer = setTimeout(() => setState(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const first = <h3>Hi, my name is</h3>
  const second = <h1>Jackson Chen.</h1>
  const third = <h2>Just your friendly neighborhood programmer.</h2>
  const fourth = <p>I'm a software engineer based in New York.</p>
  const fifth = <AnchorLink to="/#contact">Connect With Me</AnchorLink>

  const items = [first, second, third, fourth, fifth]

  const renderItems = items.map((item, index) => <div key={index}>{item}</div>)

  return (
    <>
      <StyledImage fluid={heroImage.file.childImageSharp.fluid} />
      <StyledHeroSection animate={state} id="hero">
        {renderItems}
      </StyledHeroSection>
    </>
  )
}

export default Hero
