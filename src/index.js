import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Detail from './components/Detail';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/details" component={Detail}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
