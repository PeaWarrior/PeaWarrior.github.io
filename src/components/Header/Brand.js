import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Brand = styled(AnchorLink)`
    padding: 10px;
    color: ${({ theme, open }) => open ? theme.secondaryAccent : theme.primaryAccent};
    font-size: clamp(1.2rem, 1.5vw, 1.75rem);
    font-weight: 800;
    text-decoration: none;
    border-left: ${({ theme, open }) => open ? theme.primaryAccent : theme.secondaryAccent} 2px solid;
    border-bottom: ${({ theme, open }) => open ? theme.primaryAccent : theme.secondaryAccent} 2px solid;
    z-index: 10;
    transition: color 0.4s ease-in-out, border-left 0.4s ease-in-out, border-bottom 0.4s ease-in-out;
`

export default Brand