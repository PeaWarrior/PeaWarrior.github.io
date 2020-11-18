import styled from "styled-components"

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
  color: ${({ theme }) => theme.primaryAccent};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.device.medium}) {
    display: none;
  }
`

export default MenuButton
