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
            <InfoServicesTitle>Services</InfoServicesTitle>
            <InfoServicesText>3D Scans</InfoServicesText>
            <InfoServicesText>3D Modelling</InfoServicesText>
            <InfoServicesText>Automotive design</InfoServicesText>
            <InfoServicesText>3D Automotive concept designs </InfoServicesText>
            

          </InfoServices>
        }
        />

  </>
)
