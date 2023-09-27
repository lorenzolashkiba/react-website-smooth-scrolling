import React,{useState, useEffect} from 'react';
import arrow from '../images/arrow.svg';
import {RightArrow,ArrowContainer,LeftArrow,ImageItem,ImageList,ImageListContainer} from './styles/WorkElements'

export default function Corousel(props){
    const [count, setCount] = useState(0);

    function changeImage(direction){
       
            if (direction===-1 && count>=100){
              
                setCount(count-100);
            }else {
                var tmp = (count % (props.ListImage.length*100))+100;
                if(tmp===props.ListImage.length*100){
                    tmp=0;
                }
                setCount(tmp);
        
            }
        
    }
    useEffect(() => {


    },[count]);

    return (
        <>
        <ArrowContainer>
        <LeftArrow onClick={() =>  changeImage(-1)} src={arrow} />
        <RightArrow onClick={() => changeImage(1)} src={arrow} />
        </ArrowContainer>
        <ImageListContainer>
        <ImageList style={{transform: 'translateX(-'+count+'%)'}}>

        {
        props.ListImage.map((imageSrc,index) =>(
        <ImageItem key={index} src={imageSrc}/>
        )) 
        }
        </ImageList>
         
        </ImageListContainer>
        </> 
    
    )
}
