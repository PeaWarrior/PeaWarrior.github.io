import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import NavBar from './Header/NavBar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Layout