import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {Container} from './styles/StoreElements';
export default function Store() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Container>
        <div>STILL WORKING ON IT</div>
      </Container>
    </>

  )
}