import React, { Component } from 'react';

import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';
import SliderSection from '../../components/Slider/index.jsx';
import Saleoff from '../../components/Saleoff';
import GridProduct from '../../components/GridProduct';
import LatestNews from '../../components/LatestNews';

import totop from '../../images/icon/to_top.png';

export class LandingPage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <SliderSection/>
                <Saleoff/>
                <GridProduct/>
                <LatestNews/>
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

export default LandingPage;