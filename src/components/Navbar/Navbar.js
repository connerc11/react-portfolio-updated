
import React, { Component } from 'react'; 
import { MenuItems } from './Menuitems';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar.css'

class Navbar extends Component {
    state = {touched: false}
    
    
        state = {clicked: true}

        handleClick = () => {
            this.setState({ clicked: !this.state.clicked })
        }
        render(){
        return (
            <nav className="NavBarItem">
                <h1 className="navLogo">Conner's Portfolio<i className="fas fa-hockey-puck"></i></h1>
                <div className="menuIcons" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i></div>
                <ul className={this.state.clicked ? 'nav-menu activate' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                    return (
                    <li key={index}> <a className={item.class} href="item.url"> {item.header} </a></li>
                 )
                })}
                </ul>
            </nav>
        )
    }

}
 
export default Navbar;