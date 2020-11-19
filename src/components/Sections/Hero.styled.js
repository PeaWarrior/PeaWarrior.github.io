import styled from "styled-components"
import Img from "gatsby-image"

export const StyledImage = styled(Img)`
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const StyledHeroSection = styled.section`
  min-height: 100vh;
  padding: 0 6.25%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: normal;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.primaryDark}99,
    ${({ theme }) => theme.primaryDark}99
  );
  width: 100vw;

  h1 {
    margin: 0.5rem 0 0 0;
    font-size: clamp(2.8rem, 10vw, 5rem);
    font-weight: 700;
    color: ${({ theme }) => theme.primaryLight};
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transform: translateX(${({ animate }) => (animate ? "0" : "-100%")});
    transition: ${"transform 1.5s, opacity 2s ease-in-out"};
  }

  h2 {
    max-width: 650px;
    margin: 1rem 0;
    font-size: clamp(2rem, 3vw, 3rem);
    letter-spacing: 1px;
    color: ${({ theme }) => theme.primaryAccent};
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transform: translateY(${({ animate }) => (animate ? "0" : "100%")});
    transition: ${"transform 1.5s, opacity 2s ease-in-out"};
  }

  h3 {
    margin: 1rem 0;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: ${({ theme }) => theme.secondaryDark};
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: ${"opacity 1s ease-in-out"};
  }

  p {
    min-width: 300px;
    max-width: 450px;
    margin-bottom: 3.5rem;
    font-size: clamp(1rem, 3vw, 1.25rem);
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 2rem;
    color: ${({ theme }) => theme.secondaryDark};
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: ${"opacity 2s ease-in-out"};
  }

  a {
    padding: 1rem;
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: ${({ theme }) => theme.secondaryAccent};
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.secondaryAccent};
    border-radius: 5px;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: ${"opacity 2s ease-in-out"};
  }

  a:hover {
    color: ${({ theme }) => theme.secondaryAccent};
    background: ${({ theme }) => theme.secondaryAccent}80;
    border: 2px solid ${({ theme }) => theme.secondaryAccent};
  }
`

export default StyledHeroSection
