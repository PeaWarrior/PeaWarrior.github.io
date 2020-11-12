import React, { useState } from 'react';
import { StyledMenu } from './Menu.styled';
import { Links } from '../../constants/Links';

const Menu = ({open}) => {
    // const [open, setOpen] = useState(false);

    const MenuItems = Links.map(link => {
        return (
            <li key={link.id}>
                <a to={link.url}>{link.text}</a>
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