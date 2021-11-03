import React, {Component} from ("react");
import { Route, Switch } from 'react-router-dom';
import About from '../About';
import Navbar from '../Navbar';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Resume';



class Header extends Component {
    render() {
        return (
            <hashRouter>
            <header>
                <Navbar/>
            </header>

        <div className="portfolio-content">
            <Route exact path="/" render={() => <Switch to="/About"/>}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact-me" component={Contact}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Portfolio" component={Portfolio}/>

            
        </div>
        </hashRouter>
        )
    }
}

export default Header;