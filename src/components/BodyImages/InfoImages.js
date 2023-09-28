import styled from 'styled-components'

const VIDEOS = [
    {
        video: require('../../videos/carVideo.mp4'),
        video1: require('../../videos/carVideo.mp4'),
        photo: require("../../images/bmwe36/boyd-kitOnly-done.webp"),
        title: "E36 WIDEBODY-KIT",
        link: "/bmwe36-widebody-kit-parts",
        year: "2021",
        category: "3D Animation",
        images:[require("../../images/bmwe36/boyd-kitOnly-done.webp"),
        require("../../images/bmwe36/doubleCarPhoto1-3-done.webp"),
        
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../images/optimizedF1/Formula0.webp'),
        video1: require('../../images/optimizedF1/Formula0.webp'),
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
        video: require('../../videos/bmwVideoOptimized.mp4'),
        photo: require("../../images/bmwe36/lorenzo-lashkiba-garagebmw12.jpg"),
        title: "E36 WIDEBODY-KIT",
        link: "/bmwe36-widebody-kit-anim",
        year: "2021",
        category: "3D Animation",
        images:[
        require("../../images/bmwe36/lorenzo-lashkiba-garagebmw1.jpg"),
        require("../../images/bmwe36/lorenzo-lashkiba-garagebmw2.jpg"),
        require("../../images/bmwe36/lorenzo-lashkiba-garagebmw12.jpg"),
        require("../../images/bmwe36/lorenzo-lashkiba-tropicalbmw.jpg"),
        require("../../images/bmwe36/sideCarWireframe.webp"),
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/spaceOptimized Loop.mp4'),
        video1: require('../../videos/spaceOptimized.mp4'),
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
        video1: require('../../videos/redcar.webm'),
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
        video: require('../../images/NIssanNismo-JPEG/10.webp'),
        photo: require("../../images/NIssanNismo-JPEG/10.webp"),
        video1: require('../../images/NIssanNismo-JPEG/10.webp'),
       
        link: "/NissanNismoGT-R",
        year: "2023",
        title: "Nissan Nismo GT-R ",
        category: "3D rendering and design",
        images:[require("../../images/NIssanNismo-JPEG/1.jpeg"),
        require("../../images/NIssanNismo-JPEG/2.jpeg"),
        require("../../images/NIssanNismo-JPEG/3.jpeg"),
        require("../../images/NIssanNismo-JPEG/4.jpeg"),
        require("../../images/NIssanNismo-JPEG/5.jpeg"),
        require("../../images/NIssanNismo-JPEG/6.jpeg"),
        require("../../images/NIssanNismo-JPEG/7.jpeg"),
        require("../../images/NIssanNismo-JPEG/8.jpeg"),
        require("../../images/NIssanNismo-JPEG/9.jpeg"),
        require("../../images/NIssanNismo-JPEG/11.jpeg"),
        require("../../images/NIssanNismo-JPEG/13.jpeg")
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../images/foggyVase/untitled11.webp'),
        photo: require('../../images/foggyVase/untitled11.webp'),
        video1: require('../../images/foggyVase/untitled11.webp'),

        link: "/foggyVase",
        year: "2023",
        title: "Foggy Vase Plant",
        category: "3D rendering and design",
        images:[require("../../images/foggyVase/untitled11.jpeg"),
        require("../../images/foggyVase/untitled6.jpeg"),
        require("../../images/foggyVase/untitled7.jpeg"),
        require("../../images/foggyVase/untitled8.jpeg"),
        require("../../images/foggyVase/untitled9.jpeg"),
        require("../../images/foggyVase/untitled10.jpeg")
        
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../images/bathroom/bathroom1-2-Large.webp'),
        photo: require('../../images/bathroom/bathroom1-2-Large.webp'),
        video1: require('../../images/bathroom/bathroom1-2-Large.webp'),

        title: "Bathroom",
        link: "/bathroom",
        year: "2021",
        category: "3D Renderings",
        images:[require("../../images/bathroom/bathroom1-1 Large.jpeg"),
        require("../../images/bathroom/bathroom1-2 Large.jpeg"),
        require("../../images/bathroom/bathroom1-3 Large.jpeg"),
        require("../../images/bathroom/bathroomToiledOpenLid Large.jpeg"),
        require("../../images/bathroom/bathroomToiletCloseLid Large.jpeg"),
        
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/porsche360.mp4'),
        photo: require('../../images/porsche1970/9.jpg'),
        video1: require('../../videos/porsche360.mp4'),

        title: "Porsche-911 modified exterior",
        link: "/Porsche-911-exterior",
        year: "2022",
        category: "3D Renderings",
        images:[require('../../images/porsche1970/1.jpg'),
        require('../../images/porsche1970/2.jpg'),
        require('../../images/porsche1970/3.jpg'),
        require('../../images/porsche1970/4.jpg'),
        require('../../images/porsche1970/5.jpg'),
        require('../../images/porsche1970/6.jpg'),
        require('../../images/porsche1970/7.jpg'),
        require('../../images/porsche1970/8.jpg'),
        require('../../images/porsche1970/9.jpg'),
        require('../../images/porsche1970/10.jpg')

        
        ],
        credits: " Lorenzo Lashkiba"
    },
    {
        video: require('../../videos/porscheInterior.mp4'),
        photo: require('../../images/porsche1970/interior7.jpg'),
        video1: require('../../videos/porscheInterior.mp4'),

        title: "Porsche-911 modified interior",
        link: "/Porsche-911-interior",
        year: "2022",
        category: "3D Renderings",
        images:[require('../../images/porsche1970/interior1.jpg'),
        require('../../images/porsche1970/interior2.jpg'),
        require('../../images/porsche1970/interior3.jpg'),
        require('../../images/porsche1970/interior4.jpg'),
        require('../../images/porsche1970/interior5.jpg'),
        require('../../images/porsche1970/interior6.jpg'),
        require('../../images/porsche1970/interior7.jpg'),
        require('../../images/porsche1970/interior8.jpg'),
        require('../../images/porsche1970/interior9.jpg'),
        

        
        ],
        credits: " Lorenzo Lashkiba"
    },

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