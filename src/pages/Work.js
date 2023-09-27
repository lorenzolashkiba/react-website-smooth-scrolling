import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {BigContainer,Title,InnerTitle,TitleContainer,Description,Credits,Title1,NextLink,NextLinkText} from './styles/WorkElements';
import Corousel from './CorouselComponent';
import arrowBlack from '../images/arrowBlack.svg';
import {RightArrow,LeftArrow} from './styles/WorkElements';
import Footer from '../components/Footer';
import { Link as LinkR} from 'react-router-dom';
import {VideoBg,VideoContainer} from '../components/Video';

export default function Work(props){
  const [isOpen,setIsOpen] = useState(false)

  // componentDidMount(){
  //   setInterval(this.changeImage,2000);
  // };
  const toggle = () => {
      setIsOpen(!isOpen)
  };


  return (
    <> 
      <BigContainer> 
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <TitleContainer>
        <Title>
          <InnerTitle>{props.project.title}</InnerTitle>
          <InnerTitle>{props.project.year}</InnerTitle>
          <InnerTitle>{props.project.category}</InnerTitle>
        </Title>
        
      </TitleContainer>
      {
        
        props.project.video.endsWith("mp4") == true ?
        <VideoContainer>
         <VideoBg autoPlay loop src={ props.project.video1} type='video/mp4'/>
      </VideoContainer>
         :  console.log("no-video")
      }
      <Corousel ListImage={props.project.images} />
     
      <Description>
        <Title1>
          <InnerTitle style={{opacity:"0.7"}}>{props.project.category}</InnerTitle>
          <Credits>
            <InnerTitle style={{opacity:"0.7"}}>Credits</InnerTitle>
            <InnerTitle style={{marginTop:"1em"}} >- {props.project.credits} </InnerTitle>
          </Credits>
        </Title1>
      </Description>

      <NextLink>
        <LinkR to={props.prevP}> <LeftArrow  src={arrowBlack} /></LinkR>
        <NextLinkText>NEXT PROJECT</NextLinkText>
        <LinkR to={props.nextP}><RightArrow src={arrowBlack} /></LinkR>
      </NextLink>
   

      <Footer Fcolor={"black"} Bcolor={"white"}/>
      </BigContainer> 
    </>

  )
}
