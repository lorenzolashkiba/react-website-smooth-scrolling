import styled from 'styled-components'

const VIDEOS = [
    {
        video: require('../../videos/finalVideoWithAudio.mov'),
        photo: require("../../images/blachole.png"),
        title: "origin",
        link: "/work/origin"
    },
    {
        video: require('../../videos/finalVideoWithAudio.mov'),
        photo: require("../../images/blachole.png"),
        title: "origin",
        link: "/work/origin"
    },
    {
        video: require('../../videos/finalVideoWithAudio.mov'),
        photo: require("../../images/blachole.png"),
        title: "origin",
        link: "/work/origin"
    },
    {
        video: require('../../videos/finalVideoWithAudio.mov'),
        photo: require("../../images/blachole.png"),
        title: "origin",
        link: "/work/origin"
    }
]
export default VIDEOS;
export const VideoContainerBody = styled.div`
    width:100%;
    height:30em;
    background-color:blue;
    margin-bottom:1em;
    @media screen and (max-width: 768px) {
        margin-bottom:0.5em;
        height:15em;
    }
`
export const VideoP = styled.video`
    position: absolute;
    width:100%;
    height:30em;
    -o-object-fit:cover;
    object-fit:cover;
    @media screen and (max-width: 768px) {
        height:15em;
    }
`
export const VideoDesc = styled.h1`
    position: absolute;
    margin: 12em 0 2em 2em;
    color:white;
    @media screen and (max-width:768px){
        margin: 5em 0 1em 1em;
    }
   `