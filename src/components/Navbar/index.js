import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';
const Navbar = ({toggle}) => {
  return (
   <>
    <Nav> 
        <NavbarContainer>
            <NavLogo to="/">LBL</NavLogo>
            <MobileIcon onClick={toggle}> 
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/Photo">Photo</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Auto">Auto</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Store">Store</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/About">About</NavLinks>
                </NavItem>

            </NavMenu>
        
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar