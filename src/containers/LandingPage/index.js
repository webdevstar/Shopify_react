import React, { Component } from 'react';

import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';
import Slider_section from '../../components/Slider/index.jsx';
import Saleoff from '../../components/Saleoff';
import Grid_product from '../../components/Grid_product';
import Latest_news from '../../components/Latest_news';

export class LandingPage extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Slider_section/>
                <Saleoff/>
                <Grid_product/>
                <Latest_news/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;