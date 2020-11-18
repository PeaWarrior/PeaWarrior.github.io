import React, { useState } from "react"

import StyledNavBar from "./NavBar.styled"
import Brand from "./Brand"
import MenuButton from "./MenuButton"
import Menu from "../Menu/Menu"

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <StyledNavBar>
      <Brand to="/#hero" open={open}>
        JC
      </Brand>
      <MenuButton onClick={toggleMenu} aria-label="menu">
        {open ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </MenuButton>
      <Menu open={open} toggleMenu={toggleMenu} />
    </StyledNavBar>
  )
}

export default NavBar
