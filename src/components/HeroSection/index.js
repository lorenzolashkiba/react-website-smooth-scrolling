import React from 'react';
import Video from '../../videos/finalVideoWithAudio.mov';
import { HeroBg,HeroContainer,VideoBg,VideoContainer,HeroContent,HeroH1,HeroP,HeroBtnWrapper,Button } from './HeroElements';
import { useWindowDimensions } from '../widthHeightWindow';

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
        <HeroH1> {width > 768 ? "Welcome to LDR" : "Welcome"} </HeroH1>
    
        <HeroP>{width > 768 ? 
          "The place where the virtual world becomes reality" : " To LTO, together we will distrupt reality" }
        </HeroP>
        <HeroBtnWrapper>
          <Button to='work'>MY WORK1</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection