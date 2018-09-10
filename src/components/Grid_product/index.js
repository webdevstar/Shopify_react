import React, { Component } from 'react';

import Product from '../Product';

import product_04 from '../../images/product_04.png';
import product_05 from "../../images/product_05.png";
import product_06 from "../../images/product_06.png";
import product_07 from "../../images/product_07.png";
import product_08 from "../../images/product_08.png";
import product_09 from "../../images/product_09.png";
import product_10 from "../../images/product_10.png";
import product_11 from "../../images/product_11.png";

export class Grid_product extends Component {

	constructor() {
        super();
        this.state = {
            products:false,
        };
    }

	componentDidMount() {
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products/group/FEATURED_ITEM')
            .then(result=>result.json())
            .then(products=>this.setState({products}))
    }

    render() {
    	var products = new Array();
    	if(this.state.products){
    		products = this.state.products.products;
    	}
        return (
        	<section className="py-50">
		        <div className="port-title">
		            <div className="container">
		                <div className="row justify-content-center">
		                    <div className="col-md-8 text-center">
		                        <h2 className="title">our products</h2>
		                        <p className="title-detail">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
		                            born and I will give you a complete account.</p>
		                        <div className="title-border mx-auto m-b-35"></div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="port-body">
		            <div className="container">
		                <div className="grid">
		                    <div className="grid-filter">
		                        <ul className="text-center">
		                            <li className="active">
		                                <span data-filter="*">All</span>
		                            </li>
		                            <li>
		                                <span data-filter=".sofa">Sofa</span>
		                            </li>
		                            <li>
		                                <span data-filter=".chair">Chair</span>
		                            </li>
		                            <li>
		                                <span data-filter=".decor">Decor</span>
		                            </li>
		                            <li>
		                                <span data-filter=".lamp">lamp</span>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="grid-body row" data-layout="fitRows">
		                        
		                        	{
		                        		products.map((product) =>
		                        			<Product key={product.toString()} product={product}/>
		                        		)
		                        	}
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
        )
    }
}

export default Grid_product;