import React from "react";
// import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'

function Project() {
    const projectGroups = [
        {
            id: 1,
            infomation: "App to play trivia and drink casually with friends",
            link: "https://github.com/connerc11/Trivia-Brews-Project1",
            title: "Trivia Brews",
            github: "https://github.com/connerc11/Trivia-Brews-Project1",
            
        },
        {
            id: 2,
            information: "App to create a fitness plan",
            link: "https://fitness-buddy-2.herokuapp.com/",
            title: "Fitness Buddy",
            github: "https://github.com/connerc11/Fitness-Buddy",
            
        },
        {
            id: 3,
            information: "Original Portfolio",
            link: "https://github.com/connerc11/Conner-Cochrane-Portfolio",
            title: "Conner Cochranes Portfolio",
            github: "https://github.com/connerc11/Conner-Cochrane-Portfolio",
           
        },
        {
            id: 4,
            information: "Place to track and learn about employees",
            link: "https://github.com/connerc11/Employee-Tracker",
            title: "Employee Tracker ",
            github: "https://github.com/connerc11/Employee-Tracker",
           
        }
        
    ]
        

    
    return (
        <div className="portfolio"> 
        <div className="carousel-container">

            <Carousel >
        <Carousel.Item>
            {projectGroups.map((data) => (
                <div>
                    <img className="d-block w-100"
                    src={require(`../../assets/images/${data.id}.png`)}
                    alt={data.infomation}

                    ></img>
                    <Carousel.Caption>
                        {data.title} : <span>{data.infomation}</span>
                       
                        </Carousel.Caption>
                </div>
            ))}
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
/* //         <div className="card">
//             <div className="img-container">
//             <img alt={data.title} src={data.img}/>
//             </div>
//             <div className="content">
//                 <p className="card-title">{data.name}</p>
            
//             </div>
// </div> */

        
        
    )
}


export default Project;