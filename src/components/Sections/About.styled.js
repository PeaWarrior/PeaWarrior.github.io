import styled from "styled-components";
import Img from 'gatsby-image';

export const StyledImage = styled(Img)`
  margin: 0 1.5rem 1.5rem 1.5rem;
`;

export const StyledAboutSection = styled.section`
  min-height: 100vh;
  padding: 4.25rem 6.25%;
  display: flex;
  align-items: center;
  
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    div {
      display: block;
      width: 100%;

      @media (min-width: ${({ theme }) => theme.device.medium}) {
        width: 50%;
      }
    }

  }

  p {
    padding: 0 6.25%;
    margin: 0 0 1rem 0;
    font-size: clamp(1rem, 2.5vw, 1.15rem);
    font-weight: 300;
    line-height: 1.75rem;
  }

`;