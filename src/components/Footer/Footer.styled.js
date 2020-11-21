import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 0 6.25%;
  width: 100%;
  height: 4.25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryAccent};
  background: #fbfbfb;
  z-index: 1;

  a {
    color: ${({ theme }) => theme.secondaryAccent }
  }
`;

export default StyledFooter;