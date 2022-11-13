import styled from 'styled-components'

export const BigContainer = styled.div`
    background-color:black;
`
export const TitleContainer= styled.div`
    margin-top:4em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        margin-top:1em;
        justify-content: flex-start;
    }
`
export const Title= styled.div`
    width: 100%;
    max-width: 1100px;
    height:10em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity:0.7;
    font-weight: bold;
    @media screen and (max-width: 768px){
        align-items: flex-start;
        flex-direction: column;
        margin-left:2.8em;
    }
`
export const InnerTitle = styled.p`
    color: white;
`
export const ImageListContainer = styled.div`
    overflow: hidden;
    width:100%;
    height:auto;
    white-space: nowrap;
    margin-top:2em;
`
export const ImageList = styled.div`
    white-space: nowrap;
    transform: translateX(0%);
    transition: transform 0.4s;
`
export const ImageItem = styled.img`
    width:100%;
    height:90vh;
    -o-object-fit:cover;
    object-fit:cover;
    @media screen and (max-width: 768px){
        width:100%;
        height:50vh;
    }
`
export const LeftArrow = styled.img`
    width:2em;
    height: auto;
    transform:rotate(90deg);
    z-index:3;
    margin:3em;
    cursor:pointer;

`
export const RightArrow = styled.img`
    width:2em;
    height: auto;
    transform:rotate(-90deg);
    z-index:3;
    margin:3em;
    cursor:pointer;

`
export const ArrowContainer = styled.div`
    position:absolute;
    width:100vw;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width: 1900px;
    @media screen and (max-width: 768px){
      
        height:60vh;
    }

`
export const Description = styled.div`
    width: 100vw;
    height:10em;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;

`
export const Credits = styled.div`
    display:flex;
    align-items:start;
    flex-direction: column;
    margin-top:2em;
`
export const Title1= styled.div`
    width: 100%;
    max-width: 1100px;
    height:10em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin:2em;
`
export const NextLink= styled.div`
    margin-top:7em;
    width: 100%;
    max-width: 1900px;
    height:10em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:white;
`
export const NextLinkText= styled.p`
  color:black;
  font-size:2em;
  font-weight:bold;
  @media screen and (max-width: 768px){
    font-size:1.2em;
  }
  white-space:nowrap;
`