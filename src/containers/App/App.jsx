import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../../components/Loader/index.jsx';
import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';
import LandingPage from '../LandingPage/Loadable';
import ListingPage from '../ListingPage/Loadable';

import totop from '../../images/icon/to_top.png';

class App extends Component {

    render() {
        return (
            <div>
                <Loader/>
                <Header/>
                <Switch>
                    <Route path="/landing" component={LandingPage} />
                    <Route path="/listing" component={ListingPage} />
                </Switch>
                <Footer/>
                <div className="to-top">
                    <span className="bounce">
                        <img src={totop} alt="To top"/>
                    </span>
                </div>
            </div>
        );
    }
}

export default App;