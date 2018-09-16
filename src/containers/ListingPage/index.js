import React, { Component } from 'react';

import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';

import totop from '../../images/icon/to_top.png';

export class ListingPage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Footer/>
                <div className="to-top">
                    <span className="bounce">
                        <img src={totop} alt="To top"/>
                    </span>
                </div>
            </div>
        )
    }
}

export default ListingPage;