import styled from "styled-components"

const StyledContactSection = styled.section`
  min-height: 70vh;
  padding-top: 4.25rem;
  background: ${({ theme }) => theme.secondaryLight};

  h5 {
    margin-top: 0;
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    color: ${({ theme }) => theme.secondaryDark}
  }

  a {
    padding: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryAccent};
    border: 1px solid ${({ theme }) => theme.primaryAccent};
    border-radius: 10px;
    &:hover {
      color: ${({ theme }) => theme.secondaryAccent};
      background: ${({ theme }) => theme.secondaryAccent}1A;
      border: 1px solid ${({ theme }) => theme.secondaryAccent};
    }
  }
`

export default StyledContactSection
