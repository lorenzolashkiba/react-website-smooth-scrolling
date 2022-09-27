import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { AboutSection } from '../components/InfoSection';
import {InfoServices,InfoServicesTitle } from '../components/InfoSection/InfoElements.js'
export default function Photo() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <AboutSection 
        title="PHOTO" 
        anotherSection={
        <InfoServices>
          <InfoServicesTitle>
            This is a collection of photography
            made by the director 
            </InfoServicesTitle>
        </InfoServices>
        }
        />
    </>

  )
}