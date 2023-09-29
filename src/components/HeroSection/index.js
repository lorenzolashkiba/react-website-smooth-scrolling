import React from 'react';
import Video from '../../videos/bmwVideoMov.mp4';
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
          <VideoBg autoPlay loop muted src={Video} type='video/mov'/>
        </VideoContainer>
      </HeroBg>
      <HeroContent>
        <HeroH1> {width > 768 ? "Welcome to LBL" : "Welcome"} </HeroH1>
    
        <HeroP>{width > 768 ? 
          "My virtual portfolio world " : " My virtual portfolio world" }
        </HeroP>
        <HeroBtnWrapper>
          <LinkS to="work" spy={true} smooth={true} offset={-100} duration={500} >
            <Button>MY WORK</Button>
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