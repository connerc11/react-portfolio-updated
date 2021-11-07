// import React, { useState } from "react";
// // import data from "./portfolio";
import React from "react";
import Project from "../Gallery";
// // import projectCard from "../../components/Gallery"
// import 'bootstrap/dist/css/bootstrap.min.css'

// export default function Portfolio () {
// <h1>hi</h1>
// }


// // function Wrapper(props) {
// //     return <div className="wrapper">{props.child}</div>
// // }


function Portfolio () {
    return(
    <section id="portfolio">
        <h1 className="text-center">My portfolio</h1>
        <Project/>
    </section>
    )
}
// const [projects, setProjects] = useState(data)

//     return (
//         <section className="container">
//         <div className="project"> 
//         <h1 className="top-title"> Portfolio</h1>
//         </div>
        
           
//             {projects.map( (project) => (
//                 <projectCard key={project.id} image={project.img} github={project.github} title={project.title})}/>
                
//             )) }
          
//         </section>
//     )
// }

 export default Portfolio;