import React, {useState} from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import BodyImages from '../components/BodyImages';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Work from './Work';


const Home = ()=> {
    const [isOpen,setIsOpen] = useState(false)
    //this.props.sendData({link:"hi"});
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection />
            <BodyImages  />
            <Footer Bcolor={"black"} Fcolor={"white"}/>
              
        </>
    );
};

export default Home