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
  }
`

export default StyledProjectsSection
