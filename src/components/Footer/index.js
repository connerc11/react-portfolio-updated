import React from "react";
import PDF from "./Resume 9:29.pdf";

function Footer() {
    return (
        <footer className="Footer">
<ul className="">
<li className="">
<i class="fab fa-linkedin-in"></i>
<a href="https://www.linkedin.com/in/conner-cochrane-5a42a8211/"></a>
</li>
<li className="">
<i class="fab fa-github"></i>
<a href="https://github.com/connerc11"></a>
</li>
<li className="">
<i class="far fa-file"></i>
<a href={PDF}></a>
</li>
</ul>
        
        
        
        </footer>
    )
}

export default Footer;