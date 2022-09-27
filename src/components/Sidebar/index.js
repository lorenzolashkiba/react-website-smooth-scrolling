import React from 'react'
import { 
    SidebarContainer,
    Icon,CloseIcon,
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
                <SiderbarLink to='/' onClick={toggle}>Home</SiderbarLink>
                <SiderbarLink to='/Photo' onClick={toggle}>Photo</SiderbarLink>
                <SiderbarLink to='/Auto' onClick={toggle}>Auto</SiderbarLink>
                <SiderbarLink to='/Store' onClick={toggle}>Store</SiderbarLink>
                <SiderbarLink to='/About' onClick={toggle}>About</SiderbarLink>
            </SidebarMenu>

        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar