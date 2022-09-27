import React from 'react'
import { 
    TitleH1,
    UpBarContainer,
    FooterContainer,
    NavItem,
    NavLinks,DownBarContainer,
    NavMenu,NavMenuDown,
    Date,NavItemDown,NavText

    } from './FooterElements'

export default function Footer() {
  return (
    <>
        <TitleH1>BE ALWAYS CREATIVE</TitleH1>
        <FooterContainer> 
        
            <UpBarContainer>
             
              <NavMenu>
                
                  <NavItem>
                      <NavLinks to="About">About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="Store">Store</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="Auto">Auto</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="Photo">Photo</NavLinks>
                  </NavItem>

                 
              </NavMenu>
            </UpBarContainer>
            <DownBarContainer>
            <NavMenuDown>
                <NavItemDown>
                    <Date> © 2022 LTO inc.</Date>
                </NavItemDown>
                
                <NavItemDown>
                    <NavText>info@Lto.om</NavText>
                    <NavText>EU IT</NavText>
                </NavItemDown>
            </NavMenuDown>
            </DownBarContainer>
        </FooterContainer>
    </>
  )
}
