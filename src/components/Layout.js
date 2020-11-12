import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Menu from '../components/Menu/Menu';


import NavBar from './Header/NavBar'
import Brand from './Header/Brand'
import MenuButton from './Header/MenuButton'

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleMenuClick = (event) => {
        setOpen(!open);
    }


    return (
        <ThemeProvider theme={theme}>
            <NavBar>
                <Brand to="/">JACKSON CHEN</Brand>
                <MenuButton onClick={handleMenuClick}
                >
                    {open ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                </MenuButton>
            </NavBar>

            <Menu open={open} />

            {children}
        </ThemeProvider>
    )
}

export default Layout