import React, {Component} from ("react");
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../About';
import Navbar from '../Navbar';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Resume';



class Header extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
            <header>
                <Navbar/>
           

        <div className="portfolio-content">
            <Route component={About} path="/" exact/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Portfolio" component={Portfolio}/>

            
        </div>
        </header>
        </Switch>
        </BrowserRouter>
        )
    }
}

export default Header;