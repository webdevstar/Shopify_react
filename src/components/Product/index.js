import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cartTo } from '../../actions/cart_item'
import './product.css';

export class Product extends Component {

	constructor(props) {
        super(props);
    }

    add_to_cart = () => {
	    this.props.dispatch(cartTo(this.props.product));
	}

    render() {
        return (
        	<div className="col-lg-3 col-md-4 col-sm-6 grid-item chair">
	            <div className="grid-product">
	                <div className="image bg-lightblue">
	                    <a href="#">
	                        <img src={this.props.product.image.imageUrl} alt="Chair"/>
	                    </a>
	                </div>
	                <a href="#" className="name">{this.props.product.description.name}</a>
	                <div className="price">
	                	<p className="originalPrice">{this.props.product.originalPrice}</p>
	                	<p className="finalPrice">{this.props.product.finalPrice}</p>
	                </div>
	                <div className="addcart">
	                	<div onClick={this.add_to_cart}>
				            <p>Add to cart</p>
				        </div>
	                </div>
	            </div>
	        </div>
        )
    }
}

export default connect() (Product);