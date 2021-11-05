
import React, { Component } from 'react'; 

import './style.css'
import { NavLink } from "react-router-dom"

class Nav extends Component {
   
        render(){
        return (
            <nav className="NavBarItem">
                 <h1 className="navLogo">Conner's Portfolio <i className="fas fa-hockey-puck"></i></h1>
                <ul className="nav-menu"> 
            <li><NavLink  activeStyle={{fontWeight: 'bold'}}to="/Portfolio">Portfolio</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold'}}to="/Contact">Contact</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold'}}to="/About">About</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold'}}to="/Resume">Resume</NavLink></li>
            </ul>
           
            </nav>
        )
    }

}
 
export default Nav;