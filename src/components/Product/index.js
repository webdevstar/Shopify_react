import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cartTo } from '../../actions/cart_item'
import { cartkey } from '../../actions/cartkey'
import './product.css';

export class Product extends Component {

	constructor(props) {
        super(props);
    }

 //    add_to_cart = () => {
	//     this.props.dispatch(cartTo(this.props.product));
	// }

	handleOnclick (event) {
        if(!this.props.cartkey){
	        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart', {
			    method: 'post',
			    headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json',
			    },
			    body: JSON.stringify({
			        product: this.props.product.id,
			        quantity: 1
			    })
			})
				.then(result=>result.json())
	            .then(cart=>{ this.props.addcartkey(cart.code), this.props.cartTo(cart)})
	    }
	    else {
	    	var quantity = 1;
	    	this.props.cart_items.products.forEach((product) => {
	    		if(product.id == this.props.product.id) quantity = product.quantity+1
	    	})
	    	fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart/'+this.props.cartkey, {
			    method: 'post',
			    headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json',
			    },
			    body: JSON.stringify({
			        product: this.props.product.id,
			        quantity: quantity
			    })
			})
				.then(result=>result.json())
	            .then(cart=>this.props.cartTo(cart))
	    }
    }

    render() {
    	var cartegory = "";
    	if(this.props.product.categories)
    		cartegory = this.props.product.categories[0].code
    	console.log(cartegory);
        return (
        	<div className={"col-lg-3 col-md-4 col-sm-6 grid-item "+cartegory}>
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
	                	<div onClick={()=>this.handleOnclick()}>
				            <p>Add to cart</p>
				        </div>
	                </div>
	            </div>
	        </div>
        )
    }
}

const keyStateToProps = (state) => {
    return {
        cartkey : state.cartkey.cartkey,
        cart_items : state.cart.cart_items
    }
}

const keyDispatchToProps = (dispatch) => {
    return {
        addcartkey : (e) => dispatch(cartkey(e)),
        cartTo : (e) => dispatch(cartTo(e))
    }
}

export default connect(keyStateToProps, keyDispatchToProps) (Product);