import React from "react";
import resume from "../../assets/files/Resume 9:29.pdf"


 function Resume () {
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">My Resume</h1>
    <h3 className="display-8">Coding Talents</h3>
    <hr className="my-4 text-center"></hr>
    <p className="lead">Front and Back end Web Development</p>
    <p className="lead">HTML, CSS, Javascript</p>
    <p className="lead">NoSQL, SQL, MongoDB</p>
    <p className="lead">React with JSX</p>
    <a href={resume}> Download PDF </a>
  </div>
</div>
        
       
    )
}
 // <section className="myresume" id="myresume">
        //     <h1> My Resume</h1>
        // <ul>
        //     <h3>Coding Talents</h3>
        //     <li>Fron and Back end Web Development</li>
        //     <li>HTML, CSS, Javascript</li>
        //     <li>NoSQL, SQL, MongoDB</li>
        //     <li>React</li>

        //     <a href={resume}> Download PDF </a>
        // </ul>


        // </section>
export default Resume