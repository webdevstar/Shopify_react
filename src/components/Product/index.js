import React, { Component } from 'react';

import product_04 from '../../images/product_04.png';
import './product.css';

export class Product extends Component {

	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="col-lg-3 col-md-4 col-sm-6 grid-item chair">
	            <div className="grid-product">
	                <div className="image bg-lightblue">
	                    <a href="#">
	                        <img src={this.props.product.image.imageUrl} alt="Chair"/>
	                    </a>
	                    <div className="addcart">
	                        <a href="#">Add to cart</a>
	                    </div>
	                </div>
	                <a href="#" className="name">{this.props.product.description.name}</a>
	                <div className="price">
	                	<p className="originalPrice">{this.props.product.originalPrice}</p>
	                	<p className="finalPrice">{this.props.product.finalPrice}</p>
	                </div>
	            </div>
	        </div>
        )
    }
}

export default Product;