import React from 'react'
import NavBar from './Header/NavBar'
import Brand from './Header/Brand'
import NavLinks from './Header/NavLinks'
import MenuButton from './Header/MenuButton'

import { AiOutlineMenuFold } from "react-icons/ai";

const Layout = ({ children }) => {
    return (
        <>
        <NavBar>
            <Brand to="/">JACKSON CHEN</Brand>
            <MenuButton><AiOutlineMenuFold /></MenuButton>
            {/* <NavLinks /> */}
        </NavBar>

        {children}
        </>
    )
}

export default Layout