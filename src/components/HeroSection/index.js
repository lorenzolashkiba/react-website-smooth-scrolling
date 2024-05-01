import React from 'react';
import Video from '../../images/NIssanNismo-JPEG/10.webp';
import {HeroArrow,ImgArrow,HeroBg,HeroContainer,VideoBg,VideoContainer,HeroContent,HeroH1,HeroP,HeroBtnWrapper,Button } from './HeroElements';
import { useWindowDimensions } from '../widthHeightWindow';
import { Link as LinkS } from 'react-scroll';
import arrow from '../../images/arrow.svg';
const HeroSection = () => {
  const { height, width } = useWindowDimensions();
  return (
    <HeroContainer>
      <HeroBg>
        <VideoContainer>
          <VideoBg src={Video} alt="3D scans and automotive modelling"/>
        </VideoContainer>
      </HeroBg>
      <HeroContent>
        <HeroH1> {width > 768 ? "Welcome to LBL" : "Welcome"} </HeroH1>
    
        <HeroP>{width > 768 ? 
          "3D Scans & 3D Automotive Modelling " : " 3D Scans & 3D Automotive Modelling" }
        </HeroP>
        <HeroBtnWrapper>
          <LinkS to="work" spy={true} smooth={true} offset={-100} duration={500} >
            <Button>CONTACT US</Button>
          </LinkS>
        </HeroBtnWrapper>
     
      </HeroContent>
         <HeroArrow>
          <LinkS to="about" spy={true} smooth={true} offset={-300} duration={500} >
            <ImgArrow src={arrow} />
          </LinkS>
        </HeroArrow>
    </HeroContainer>
  )
}

export default HeroSection