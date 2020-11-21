import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1rem 6.25%;
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.primaryDark};
  z-index: 5;

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