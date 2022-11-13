import styled from 'styled-components'

const VIDEOS = [
    {
        video: require('../../videos/bmwVideoOptimized.mp4'),
        photo: require("../../images/optimizedF1/Formula0.webp"),
        title: "2015 season F1 ",
        year: "2022",
        category: "3D car rendering",
        link: "/F12015",
        images:[require("../../images/optimizedF1/Formula1.webp"),
        require("../../images/optimizedF1/Formula2.webp"),
        require("../../images/optimizedF1/Formula3.webp"),
        require("../../images/optimizedF1/Formula4.webp"),
        require("../../images/optimizedF1/Formula5.webp")],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/spaceanima.mp4'),
        photo: require("../../images/blachole.webp"),
        title: "ORIGIN",
        link: "/origin",
        year: "2021",
        category: "3D Animation",
        images:[require("../../images/originImages/shoot6.webp"),
        require("../../images/originImages/shoot61.webp"),
        require("../../images/originImages/shoot99.webp")],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/redcar.webm'),
        photo: require("../../images/bmwe36/render2.mov.webp"),
        title: "BMW E36 widebody kit",
        link: "/bmwe36-widebody-kit",
        year: "2022",
        category: "3D rendering and design",
        images:[require("../../images/bmwe36/bmwe36-1.webp"),
        require("../../images/bmwe36/bmw36-2.webp"),
        require("../../images/bmwe36/bmw36-3.webp"),
        require("../../images/bmwe36/bmw36-4.webp"),
        require("../../images/bmwe36/bmw36-5.webp"),
        require("../../images/bmwe36/bmw36-6.webp"),
        require("../../images/bmwe36/bmw36-7.webp"),
        require("../../images/bmwe36/bmw36-8.webp")
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/bmwVideoOptimized.mp4'),
        photo: require("../../images/blachole.webp"),
        title: "origin3",
        link: "/origin"
    }
]
export default VIDEOS;
export const VideoContainerBody = styled.div`
    width:100%;
    height:30em;
    background-color:black;
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