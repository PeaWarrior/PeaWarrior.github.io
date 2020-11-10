import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
`

const NavItem = styled(Link)`
    margin: 0 20px;
    color: #95A3B3;
    letter-spacing: 0.75px;
    align-items: center;
    text-decoration: none;

    &:hover {
        color: #4B4E6D;
        border-bottom: #84DCC6 1px solid;
    }
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