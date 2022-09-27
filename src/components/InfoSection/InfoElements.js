import styled from 'styled-components'

export const InfoWrapper = styled.div` 
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    @media screen and (max-width: 768px) {
        height: 100%;
        padding-bottom:5em;
    }

`
export const InfoContainerBig = styled.div` 
    width:inherit;
    height:inherit;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: none;
    @media screen and (max-width: 768px) {
        align-items: center;
    }
`
export const InfoH1 = styled.h1`
    font-size: 2.5em;
    color: #000000;
    padding:0em 0 1.5em 4em;
    max-width:2100px;
    @media screen and (max-width: 768px) {
        font-size:2em;
        padding: 1.5em 0 1.5em 0;
    }
`
export const InfoContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        padding-left:2em;
        justify-content: start;
    }
`
export const InfoServices = styled.ul`
    width: 20%;
    margin-right:10em;
    @media screen and (max-width: 768px) {
        margin-right:0;
        width:18em;
        padding-bottom:1.5em;
    }
`
export const InfoServicesTitle = styled.h3`
    color:gray;
    font-weight: bold;
    padding-bottom:1.5em;
    font-size:1.3em;
    @media screen and (max-width: 768px) {
        font-size:1.2em;
        padding-bottom:1em;
    }
`
export const InfoServicesText = styled.p`
    padding-bottom:0.6em;
    font-size:1.1em;
    width:60%;
    max-width:550px;
    @media screen and (max-width: 768px) {
        padding-bottom:0.3em;
        font-size:1em;
    } 
`
export const InfoContacts = styled.ul`
    width: 23%;
    @media screen and (max-width: 768px) {
        margin-right:0;
        width:20em;
    }
`
export const InfoContactsTitle = styled.h3`
    color:gray;
    font-weight: bold;
    padding-bottom:1em;
    font-size:1.3em;
    @media screen and (max-width: 768px) {
        font-size:1.2em;
    }
`
export const InfoContactsText = styled.p`
    font-size:1.1em;
    max-width:512px;
    @media screen and (max-width: 768px) {
        font-size:1em;
    } 
`