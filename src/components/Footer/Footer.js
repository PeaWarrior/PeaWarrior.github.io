import React from 'react';
import styled from 'styled-components';

import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterCircle } from 'react-icons/ai';
// import { theme } from '../../styles/theme';

const StyledFooter = styled.footer`
    padding: 0 6.25%;
    width: 100%;
    height: 4.25rem;
    position: relative;
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryAccent};
    background: #fbfbfb;
    z-index: 1;
`

const Footer = () => {
    return (
        <StyledFooter>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillMediumSquare />
            <AiFillTwitterCircle />
        </StyledFooter>
    )
}

export default Footer;