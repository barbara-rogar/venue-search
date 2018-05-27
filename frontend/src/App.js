import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BusinessListing from './pages/BusinessListing';
import BusinessDetail from './pages/BusinessDetail';
import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="body">
                    <Switch>
                        <Route path={`/`} exact component={Home}/>
                        <Route path={`/businesses/search`} component={BusinessListing}/>
                        <Route path={`/businesses/:id`} component={BusinessDetail}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
