import React, { Component } from 'react';

import SliderSection from '../../components/Slider/index.jsx';
import Saleoff from '../../components/Saleoff';
import GridProduct from '../../components/GridProduct';
import LatestNews from '../../components/LatestNews';

export class LandingPage extends Component {

    render() {
        return (
            <div>
                <SliderSection/>
                <Saleoff/>
                <GridProduct/>
                <LatestNews/>
            </div>
        )
    }
}

export default LandingPage;