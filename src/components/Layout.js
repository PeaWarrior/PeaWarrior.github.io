import React from 'react'
import { Header } from './Header'
import MenuButton from './MenuButton'
import Logo from './Logo'
import { GiHamburgerMenu } from "react-icons/gi";

const Layout = ({ children }) => {
    return (
        <>
        <Header>
            <Logo to="/">JACKSON CHEN</Logo>
            <MenuButton>
                <GiHamburgerMenu />
            </MenuButton>
        </Header>
        {children}
        </>
    )
}

export default Layout