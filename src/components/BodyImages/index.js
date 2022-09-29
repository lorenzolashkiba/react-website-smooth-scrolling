import React from 'react'
import {VideoP,VideoContainerBody,VideoDesc} from "./InfoImages.js"
import VIDEOS from "./InfoImages.js"
import HoverVideoPlayer from 'react-hover-video-player';
import { useWindowDimensions } from '../widthHeightWindow';
import { Link as LinkR} from 'react-router-dom'
function BodyImages
() {
    const { height, width } = useWindowDimensions();
  return (
    <div id="work">
   
        { 
          VIDEOS.map((obj)=>(
            <LinkR to={obj.link}>
                <VideoContainerBody ky={obj.title}>
                    <HoverVideoPlayer
                        videoSrc={obj.video}
                        videoStyle = {width > 768 ? {
                            width:'100%',
                            objectFit: 'cover',
                            height:'30em',
                    
                        } : {
                            width:'100%',
                            objectFit: 'cover',
                            height:'15em',
                    
                        }}
                
                        sizingMode="container"
                        playbackStartDelay={100}
                        restartOnPaused
                        muted={true}
                        pausedOverlay={
                            <img
                            src={obj.photo}
                            alt=""
                            style={ width> 768 ? {
                                // Make the image expand to cover the video's dimensions
                                position: 'absolute',
                                width:'100%',
                                height:'30em',
                                objectFit: 'cover',
                            
                            } :{
                                // Make the image expand to cover the video's dimensions
                                position: 'absolute',
                                width:'100%',
                                height:'15em',
                                objectFit: 'cover',
                            
                            } }
                            />
                        }
                        loadingOverlay={
                            <div className="loading-overlay">
                            <div className="loading-spinner" />
                            </div>
                        }
                    />
                    <VideoDesc>{obj.title}</VideoDesc>
                </VideoContainerBody> 
            </LinkR>   
        ))
        }
        
    </div>
  )
}

export default BodyImages
