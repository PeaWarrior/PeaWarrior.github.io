import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import NavBar from './Header/NavBar'

const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            {children}
        </ThemeProvider>
    )
}

export default Layout