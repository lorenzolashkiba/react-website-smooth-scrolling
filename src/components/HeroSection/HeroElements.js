import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';
export const HeroContainer = styled.div`
    background:black;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 30px;
    height:95vh;
    position:relative;
    z-index:1;
    font-family:Open sans;
`
export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
`
export const VideoContainer = styled.div`

    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
export const VideoBg = styled.video`

    width:135%;
    height:135%;
    -o-object-fit:cover;
    object-fit:cover;
`
export const HeroContent = styled.div`
    position:absolute;
    max-width:1200px;
    color:white;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;

`
export const HeroH1 = styled.h1`
    font-size:4em;
    @media screen and (max-width: 768px)
    {
        font-size:3em;
    }
`
export const HeroP = styled.p`
    padding-bottom:1.5em;
    padding-top:1em;
    font-size:1.5em;
    text-align: center;
    font-weight:bold;
    @media screen and (max-width: 768px)
    {   margin:0 1em 0 1em;
        font-size:1.2em;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top:4em;
    display:flex;
    align-items:center;
    flex-direction:column;
`
export const Button = styled(LinkS)`
    cursor:pointer;
    border: 2px solid white;
    padding:0.7em 4em 0.7em 4em;
    letter-spacing: .3rem;
    background-color: none;
    transition: background-color 150ms ease-in;
    &:hover {
        background-color: white;
        color: black;
        
        }

`