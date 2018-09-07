import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../../components/Loader';
import LandingPage from '../LandingPage/Loadable';

class App extends Component {

    render() {
        return (
            <div>
                <Loader/>
                <Switch>
                    <Route path="/landing" component={LandingPage} />
                </Switch>
            </div>
        );
    }
}

export default App;