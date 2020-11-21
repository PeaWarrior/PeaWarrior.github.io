import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 0 6.25%;
  width: 100%;
  height: 4.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: ${({ theme }) => theme.primaryLight};

  a {
    padding: 0.5rem;
    color: ${({ theme }) => theme.primaryAccent };

    &:hover {
      color: ${({ theme }) => theme.secondaryAccent };
    }
  }

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 200;
  }

`;

export default StyledFooter;