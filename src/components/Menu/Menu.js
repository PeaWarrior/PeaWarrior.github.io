import React, { useRef } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import useOnClickMenu from '../../hooks';

import { StyledMenu } from './Menu.styled';
import { Links } from '../../constants';

const Menu = ({ open, toggleMenu }) => {
    const menuNode = useRef();
    useOnClickMenu(menuNode, toggleMenu);

    const MenuItems = Links.map(({ id, url, text }) => {
        return (
            <li key={id}>
                <AnchorLink to={url}>{text}</AnchorLink>
            </li>
        )
    })

    return (
        <StyledMenu ref={menuNode} open={open}>
            {MenuItems}
        </StyledMenu>
    )
}

export default Menu;