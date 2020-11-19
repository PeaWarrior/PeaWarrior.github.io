import styled from "styled-components"

const StyledSkillsSection = styled.section`
  min-height: 100vh;
  padding-top: 4.25rem;
  background: ${({ theme }) => theme.secondaryLight };

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    h3 {
      margin-top: 0;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primaryDark };
      border-bottom: 1px solid ${({ theme }) => theme.primaryDark };
    }
    
    div {
      width: 170px;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;

      svg {
        font-size: 2rem;
      }

      p {
        margin: 0.25rem 0 2rem 0;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.primaryDark };
      }
    }
  }
`

export default StyledSkillsSection
