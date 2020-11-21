import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2rem 6.25%;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: ${({ theme }) => theme.primaryLight};

  a {
    color: ${({ theme }) => theme.primaryAccent };
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.secondaryAccent };
    }
  }
  
  .links {
    a {
      padding: 0.7rem;
    }
  }

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 200;
  }

`;

export default StyledFooter;