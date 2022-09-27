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
          If you have any inquiries or questions and you wish
          to create a project or you need a service, 
          please contact us at info_contacts@LTO.com
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

  </>
)