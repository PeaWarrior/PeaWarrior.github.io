import styled from "styled-components"

const StyledProjectsSection = styled.section`
  min-height: 100vh;
  padding-top: 4.25rem;
  background: ${({ theme }) => theme.secondaryLight};
  
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .card {
      margin-bottom: 2rem;
      width: 300px;
      height: 450px;
      border: 1px solid black;

      h5 {
        margin-top: 1rem;
        height: max-content;
        font-size: clamp(1.75rem, 2.5vw, 2rem);
        color: ${({ theme }) => theme.primaryAccent};
      }

      p {
        height: max-content;
        padding: 1rem;
        margin: 0;
      }
    }
  }
`

export default StyledProjectsSection
