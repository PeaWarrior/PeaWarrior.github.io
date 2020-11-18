import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Brand = styled(AnchorLink)`
  padding: 10px;
  color: ${({ theme, open }) =>
    open ? theme.secondaryAccent : theme.primaryAccent};
  font-size: clamp(1.2rem, 1.5vw, 1.75rem);
  font-weight: 800;
  text-decoration: none;
  background: transparent;
  border: ${({ theme, open }) =>
      open ? theme.secondaryAccent : theme.primaryAccent}
    2px solid;
  z-index: 10;
  transition: background 0.4s ease-in-out, color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.secondaryAccent}66;
  }
`

export default Brand
