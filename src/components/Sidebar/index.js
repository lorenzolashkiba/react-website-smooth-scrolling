import React from 'react'
import { 
    SidebarContainer,
    Icon,CloseIcon,
    SideBtnWrap,
    SidebarRoute,
    SidebarWrapper,
    SiderbarLink,
    SidebarMenu 
} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SiderbarLink to='about' onClick={toggle}>About</SiderbarLink>
                <SiderbarLink to='discover' onClick={toggle}>Discover</SiderbarLink>
                <SiderbarLink to='services' onClick={toggle}>Services</SiderbarLink>
                <SiderbarLink to='signup' onClick={toggle}>Sign Up</SiderbarLink>
            </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/signin">
                Sign In
            </SidebarRoute>
        </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar