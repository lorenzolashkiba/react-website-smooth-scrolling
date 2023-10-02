import React from 'react'
import {InfoWrapper,InfoContactsText,InfoContainerBig,InfoContactsTitle,InfoContacts,InfoContainer,InfoH1,InfoServices,InfoServicesText,InfoServicesTitle }from './InfoElements.js'

export function AboutSection(props){
 return ( 
  <InfoWrapper>
    <InfoContainerBig>
      <InfoH1>{props.title}</InfoH1>
      <InfoContainer>
        {props.anotherSection}
        {props.firstSection}
        
        <InfoContacts>
          <InfoContactsTitle>Contacts</InfoContactsTitle>
          <InfoContactsText>
          I'm Lorenzo and if you have any inquiries or questions and you wish
          to create a project or you need a service, 
          please contact me at info@lbldesign.it
          </InfoContactsText>
        </InfoContacts>
      </InfoContainer>
    </InfoContainerBig>
  </InfoWrapper>
 );
}

export const InfoSection = () => (
  <>
    <AboutSection
        title="INTRODUCTION" 
        firstSection={
          <InfoServices id="about">
            <InfoServicesTitle>What i do</InfoServicesTitle>
            <InfoServicesText>Photography</InfoServicesText>
            <InfoServicesText>Cinamatography</InfoServicesText>
            <InfoServicesText>DigitalArt</InfoServicesText>
            <InfoServicesText>3D Concepts</InfoServicesText>
            <InfoServicesText>Automotive design</InfoServicesText>
            <InfoServicesText>Architecture design</InfoServicesText>
          </InfoServices>
        }
        />

  </>
)
