
import React, { Component } from 'react'; 

import './style.css'
import { NavLink } from "react-router-dom"

class Nav extends Component {
   
        render(){
        return (
            <nav className="NavBarItem">
                <ul> 
            <li><NavLink activeStyle={{fontWeight: 'bold'}}to="/Portfolio">Portfolio</NavLink></li>
            <li><NavLink activeStyle={{fontWeight: 'bold'}}to="/Contact">Contact</NavLink></li>
            <li><NavLink activeStyle={{fontWeight: 'bold'}}to="/About">About</NavLink></li>
            <li><NavLink activeStyle={{fontWeight: 'bold'}}to="/Resume">Resume</NavLink></li>
            </ul>
            {/* //     <h1 className="navLogo">Conner's Portfolio<i className="fas fa-hockey-puck"></i></h1>
            //     <div className="menuIcons" onClick={this.handleClick}>
            //     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i></div>
            //     <ul className={this.state.clicked ? 'nav-menu activate' : 'nav-menu'}>
            //         {MenuItems.map((item, index) => { */}
            {/* //         return (
            //         <li key={index}> <a className={item.class} href="item.url"> {item.header} </a></li>
            //      )
                })} */}
                {/* </ul> */}
            </nav>
        )
    }

}
 
export default Nav;