import React from "react";
import resume from "../../assets/files/Resume 9:29.pdf"


 function Resume () {
    return (
        <section className="myresume" id="myresume">
            <h1> My Resume</h1>
        <ul>
            <h3>Coding Talents</h3>
            <li>Fron and Back end Web Development</li>
            <li>HTML, CSS, Javascript</li>
            <li>NoSQL, SQL, MongoDB</li>
            <li>React</li>

            <a href={resume}> Download PDF </a>
        </ul>


        </section>
    )
}
export default Resume