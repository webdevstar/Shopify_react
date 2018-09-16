import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../../components/Loader/index.jsx';
import LandingPage from '../LandingPage/Loadable';
import ListingPage from '../ListingPage/Loadable';

class App extends Component {

    render() {
        return (
            <div>
                <Loader/>
                <Switch>
                    <Route path="/landing" component={LandingPage} />
                    <Route path="/listing" component={ListingPage} />
                </Switch>
            </div>
        );
    }
}

export default App;