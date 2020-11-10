import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`

const NavItem = styled(Link)`
    padding: 0 20px;
    align-items: center;
    letter-spacing: 0.2px;
    text-decoration: none;
`

const data = [
    {
        id: 1,
        text: 'Home',
        url: '/'
    },
    {
        id: 2,
        text: 'About',
        url: '/about'
    },
    {
        id: 3,
        text: 'Projects',
        url: '/projects'
    },
    {
        id: 4,
        text: 'Blog',
        url: '/blog'
    },
    {
        id: 5,
        text: 'Contact',
        url: '/contact'
    },
]

const NavItems = data.map(link => {
    return (
        <li key={link.id}>
            <NavItem to={link.url}>{link.text}</NavItem>
        </li>
    )
})

const NavLinks = () => {
    return (
        <NavList>
            {NavItems}
        </NavList>
    )
}

export default NavLinks