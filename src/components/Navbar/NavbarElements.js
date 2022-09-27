import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'


export const Nav = styled.nav`
    background:black;
    height:80px;
    //margin-top:-80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    
    @media screen and(max-width:960px){
        transition 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content:space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width: 1100px;
    //background-color:blue;
`;

export const NavLogo = styled(LinkR)`
    color:#fff;
    width:5rem;
    text-decoration:none;
    font-size:1.5rem;
    font-weight: bold;
    height:80px;
    text-align: center;
    padding: 20px 0;

`;
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:translate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
        color:#fff;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center:
    list-style: none;
    text-align: center;
    margin-right:-22px;

    @media screen and (max-width:768px){
        display:none;
    }
`;
export const NavItem = styled.li`
    height:80px;
    list-style-type: none;
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
        border-bottom: 3px solid gray
    }
    &:hover{
        transition:color 0.2s ease-in-out;
        color: gray;
        border-bottom: 3px solid gray
    }
`;    

