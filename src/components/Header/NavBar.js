import React, { useState } from 'react';
import styled from 'styled-components';

import Brand from './Brand';
import MenuButton from './MenuButton';
import Menu from '../Menu/Menu';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const StyledNavBar = styled.header`
    position: fixed;
    width: 100%;
    padding: 0 6.25%;
    height: 4.25rem;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fbfbfb;
    z-index: 5;
`

const NavBar = () => {
    const [openMenu, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!openMenu);

    return (
        <StyledNavBar>
            <Brand to="/" openMenu={openMenu}> JACKSON CHEN </Brand>
                <MenuButton onClick={toggleMenu}>
                    {openMenu ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                </MenuButton>
            <Menu openMenu={openMenu} />
        </StyledNavBar>
    )
}

export default NavBar