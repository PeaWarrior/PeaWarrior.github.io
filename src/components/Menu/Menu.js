import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Links } from '../../constants/Links';

const Menu = ({ openMenu, toggleMenu }) => {

    const MenuItems = Links.map(link => {
        return (
            <li key={link.id}>
                <a to={link.url}>{link.text}</a>
            </li>
        )
    })

    return (
        <StyledMenu openMenu={openMenu} onClick={toggleMenu}>
            {MenuItems}
        </StyledMenu>
    )
}

export default Menu