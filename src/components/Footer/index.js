import React from "react";
import PDF from "./Resume 9:29.pdf";
import './style.css'

function Footer() {
    return (
        <footer className="Footer">
<ul className="icon-styles">
<li className="icon">

<a href="https://www.linkedin.com/in/conner-cochrane-5a42a8211/" alt="linkedn"> <i class="fab fa-linkedin-in"></i></a> 
</li>
<li className="icon">

<a href="https://github.com/connerc11" alt="github"> <i class="fab fa-github"></i></a>
</li>
<li className="icon">

<a href={PDF} alt="resume"> <i class="far fa-file"></i></a>
</li>
</ul>
        
        
        
        </footer>
    )
}

export default Footer;