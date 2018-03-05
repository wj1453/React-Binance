import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

// const history = browserHistory;
const Routes = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about:world'>About</Link></li>
                </ul>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about:name" component={About} />
                <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;