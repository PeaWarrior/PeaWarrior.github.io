import styled from 'styled-components';

const StyledPageNotFoundSection = styled.section`
  min-height: 85vh;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.secondaryLight};

  .error {
    h2 {
      font-size: clamp(5rem, 10vw, 10rem);
    }

    p {
      color: ${({ theme }) => theme.primaryAccent};
      text-align: center;
    }
  }
  
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryAccent};

    &:hover {
      color: ${({ theme }) => theme.secondaryAccent};
    }
  }
`;

export default StyledPageNotFoundSection;