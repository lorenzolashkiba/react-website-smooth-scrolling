import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroBg,HeroContainer,VideoBg } from './HeroElements';
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        <HeroContainer>
          <HeroH1> </HeroH1>
        </HeroContainer>
      </HeroBg>
        
    </HeroContainer>
  )
}

export default HeroSection