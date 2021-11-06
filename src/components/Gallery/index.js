import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../../assets/images/1.png'
import pic2 from '../../assets/images/2.png'
import pic3 from '../../assets/images/3.png'
import pic4 from '../../assets/images/4.png'

function Project() {
    const projectGroups = [
        {   
            id: 1,
            img: pic1,
            information: "App to play trivia and drink casually with friends",
            link: "https://github.com/connerc11/Trivia-Brews-Project1",
            title: "Trivia Brews",
            github: "https://github.com/connerc11/Trivia-Brews-Project1",
            
        },
        {
            id: 2,
            img: pic2,
            information: "App to create a fitness plan",
            link: "https://fitness-buddy-2.herokuapp.com/",
            title: "Fitness Buddy",
            github: "https://github.com/connerc11/Fitness-Buddy",
            
        },
        {
            id: 3,
            img: pic3,
            information: "This was my beginning portfolio created with just CSS and HTML",
            link: "https://connerc11.github.io/Conner-Cochrane-Portfolio/",
            title: "Conner Cochranes Portfolio",
            github: "https://github.com/connerc11/Conner-Cochrane-Portfolio",
           
        },
        {
            id: 4,
            img: pic4,
            information: "App to create notes to remind yourself about what you have to do!",
            link: "https://note-taker1001.herokuapp.com/",
            title: "Note Taker ",
            github: "https://github.com/connerc11/Note-Taker",
           
        }
        
    ]
        

    
    return (
        <div className="portfolio"> 
        <div className="carousel-container">
        {/* <iframe src="http://localhost:3002" title="title" className="d-block w-100" width="400" height="800"/> */}

            <Carousel variant="dark">
                {/* <Carousel.Item> */}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/NO7_jgzVgbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        {/* <iframe src="http://localhost:3002" title="title" className="d-block w-100" width="400" height="1400"/> */}
                {/* </Carousel.Item> */}
            
             {projectGroups.map((data) => (
                <Carousel.Item key={data.id}>
                    <a href={data.link} target="_blank" rel="noreferrer">
                        <img className="d-block w-100"
                        src={data.img}
                        alt={data.information} />
                        <Carousel.Caption>
                            {data.title} : <span>{data.information}</span>

                        </Carousel.Caption>
                    </a>
                </Carousel.Item>

                
            ))} 
            
        </Carousel>
        </div>
    </div>


        
        
    )
}


export default Project;