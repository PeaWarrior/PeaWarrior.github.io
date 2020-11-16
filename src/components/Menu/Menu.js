import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { StyledMenu } from './Menu.styled';
import { Links } from '../../constants';

const Menu = ({ open }) => {

    const MenuItems = Links.map(({ id, url, text }) => {
        return (
            <li key={id}>
                <AnchorLink to={url}>{text}</AnchorLink>
            </li>
        )
    })

    return (
        <StyledMenu open={open}>
            {MenuItems}
        </StyledMenu>
    )
}

export default Menu