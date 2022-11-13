import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { AboutSection } from '../components/InfoSection';
import {InfoServices,InfoServicesTitle } from '../components/InfoSection/InfoElements.js';
import {Container} from './styles/AutoElements';
export default function Auto() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <AboutSection 
        title="AUTO" 
        anotherSection={
        <InfoServices>
          <InfoServicesTitle>
          This is a collection of Automotive 
          concepts and design made by the director  
            </InfoServicesTitle>
        </InfoServices>
        }
        />
      <Container>
        <div>STILL WORKING ON IT</div>
      </Container>
    </>

  )
}