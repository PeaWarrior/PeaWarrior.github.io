import React from 'react'
import NavBar from './Header/NavBar'
import Brand from './Header/Brand'
import NavLinks from './Header/NavLinks'

const Layout = ({ children }) => {
    return (
        <>
        <NavBar>
            <Brand>JACKSON CHEN</Brand>
            <NavLinks />
        </NavBar>

        {children}
        </>
    )
}

export default Layout