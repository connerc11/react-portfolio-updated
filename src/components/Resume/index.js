import React from "react";
import resume from "../../assets/files/Resume 9:29.pdf"


 function Resume () {
    return (
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4 text-center">My Resume</h1>
    <h3 class="display-8">Coding Talents</h3>
    <hr class="my-4 text-center"></hr>
    <p class="lead">Front and Back end Web Development</p>
    <p class="lead">HTML, CSS, Javascript</p>
    <p class="lead">NoSQL, SQL, MongoDB</p>
    <p class="lead">React with JSX</p>
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