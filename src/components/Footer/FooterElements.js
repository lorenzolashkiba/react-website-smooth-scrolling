import styled from 'styled-components'
import {Link as LinkR}  from 'react-router-dom'



export const TitleH1 = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size:3em;
    padding: 3.5em 0 3.5em 0;
    @media screen and (max-width: 768px)
    {
        font-size:2em;
    }
`
export const FooterContainer = styled.div`
    width: 100%;
    background-color:black;
    color:white;
  
`
export const UpBarContainer = styled.nav`
    padding-top:4em;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    @media screen and (max-width: 768px)
    {
        padding-top:2em;
        justify-content:space-around;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center:
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px)
    {
        flex-direction: column;
    }
    
`;
export const NavItem = styled.li`
    height:9px;
    list-style-type: none;
    @media screen and (max-width: 768px)
    {
        height:4em;
    }
`;
export const NavLinks = styled(LinkR)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding 0 1.3rem;
    height:100%;
    letter-spacing: .12rem;
    cursor:pointer;
    transition:color 0.2s ease-in-out;
    &:active{
        color:#fff !important;
    }
    &:hover{
        transition:color 0.2s ease-in-out;
        color: gray;
    }
`;    
export const DownBarContainer = styled.nav`
    width: 100%;
    margin-top:7em;
    
    @media screen and (max-width: 768px)
    {   
        
        margin-top:0;
    }
`

export const NavText = styled.p`
display: inline-block;
margin:3em;
@media screen and (max-width: 768px)
{
    margin:2em;
    margin-right:0;
}
`
export const Date = styled.p`

white-space: nowrap;

`
export const NavMenuDown = styled.div`
    width: 100%;
    display: flex;
    align-items: center;   
    justify-content: space-around;
`
export const NavItemDown = styled.div`
    overflow:none;
    font-siz:0.9em;
    @media screen and (max-width: 768px)
    {
        font-size:0.8em;
    }
`