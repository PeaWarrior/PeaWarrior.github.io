import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { StyledAboutSection, StyledImage } from "./About.styled"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "me.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledAboutSection id="about">
      <h4>ABOUT</h4>
      <div>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
        <div>
          <p>
            Hi there! My name is <b>Jackson Chen</b>. Just your friendly
            neighborhood programmer based in Brooklyn, NY.
          </p>
          <p>
            I enjoy solving problems. Whether it's a simple problem like{" "}
            <a href="https://thumbs.gfycat.com/SeveralEnragedIndigobunting-mobile.mp4">
              fixing a lightbulb
            </a>{" "}
            or solving a complex problem like{" "}
            <Link to="/404">my social life</Link>, I love the challenge.
          </p>
          <p>
            Before coding, I was pursuing a career in medicine. After realizing
            how much of today's modern medicine and patient care relies on tech,
            I soon found myself immersed in learning how to code at{" "}
            <a href="https://flatironschool.com/">The Flatiron School</a>. After
            graduating, I continue to learn and utilize my skills to solve all
            sorts of problems through tech.
          </p>
          <p>
            When I'm not coding, you can catch me playing basketball, video
            games, board games, reading or binge watching Netflix.
          </p>
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About
