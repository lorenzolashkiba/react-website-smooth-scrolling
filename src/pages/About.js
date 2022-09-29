import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { AboutSection } from '../components/InfoSection';
import {InfoServices,InfoServicesText,InfoServicesTitle } from '../components/InfoSection/InfoElements.js'
import { InfoStory } from './styles/AboutElements';
import Footer from '../components/Footer';
export default function About() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <AboutSection 
        title="ABOUT US" 
        anotherSection={
        <InfoServices>
          <InfoServicesTitle>Director</InfoServicesTitle>
          <InfoServicesText>Lorenzo Lashkiba</InfoServicesText>
        </InfoServices>}
        firstSection={
              <InfoServices>
                <InfoServicesTitle>Services</InfoServicesTitle>
                <InfoServicesText>Photography</InfoServicesText>
                <InfoServicesText>Cinamatography</InfoServicesText>
                <InfoServicesText>DigitalArt</InfoServicesText>
                <InfoServicesText>3D Concepts</InfoServicesText>
                <InfoServicesText>Automotive design</InfoServicesText>
                <InfoServicesText>Architecture design</InfoServicesText>
              </InfoServices>
            }
        
        />
         <InfoStory>
          <InfoServicesTitle>Story</InfoServicesTitle>
          <InfoServicesText>
          LDR  was founded by Lorenzo Lashkiba to collaborate and contribute in the art world and not only, particulary in the Photography, Cinematography, Automotive design and Web design.
          We offer other services like 3D concepts design and Architecture design.
          We are always using the latest technology available, we use them to improve our works using AI tech evolving the production concepts,3d models, artworks and particularly the Automotive design.
          Please contact us at info_contacts@LDR.com to further inquire about our creative services and scheduling availability. 
          </InfoServicesText>
        </InfoStory>

        <Footer />
    </>

  )
}