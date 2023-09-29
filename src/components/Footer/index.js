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

export default function Footer(props) {
  return (
    <>
        <TitleH1 style={{color:props.Bcolor}} >BE ALWAYS CREATIVE</TitleH1>
        <FooterContainer style={{backgroundColor:props.Bcolor,color:props.Fcolor}}> 
            <UpBarContainer>   
              <NavMenu>
                
                  <NavItem>
                      <NavLinks style={{color:props.Fcolor}} to="/About">About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="/Store" style={{color:props.Fcolor}} >Store</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="/Auto" style={{color:props.Fcolor}} >Auto</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="/Photo" style={{color:props.Fcolor}} >Photo</NavLinks>
                  </NavItem>
               
              </NavMenu>
            </UpBarContainer>
            <DownBarContainer>
            <NavMenuDown>
                <NavItemDown>
                    <Date> © 2023 LBL inc.</Date>
                </NavItemDown>
                
                <NavItemDown>
                    <NavText>info@lbldesign.it</NavText>
                    <NavText>EU IT</NavText>
                </NavItemDown>
            </NavMenuDown>
            </DownBarContainer>
        </FooterContainer>
    </>
  )
}
