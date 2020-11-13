import styled from 'styled-components'
import { Link } from 'gatsby'

const Brand = styled(Link)`
    padding: 10px;
    color: ${({ theme, openMenu }) => openMenu ? theme.secondaryAccent : theme.primaryAccent};
    font-size: 18px;
    font-weight: 800;
    text-decoration: none;
    border-left: ${({ theme, openMenu }) => openMenu ? theme.primaryAccent : theme.secondaryAccent} 2px solid;
    border-bottom: ${({ theme, openMenu }) => openMenu ? theme.primaryAccent : theme.secondaryAccent} 2px solid;
    z-index: 10;
    transition: color 0.4s ease-in-out, border-left 0.4s ease-in-out, border-bottom 0.4s ease-in-out;
`

export default Brand