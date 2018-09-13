import React, { Component } from 'react';
import {connect} from "react-redux";

import { cartkey } from '../../actions/cartkey'

export class Cartbox extends Component {

	constructor(props) {
        super(props);
        this.state = {
            cart: false,
            cartkey: false
        };
    }

    componentDidMount() {
    	if(!this.props.cartkey){
	        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart', {
			    method: 'post',
			    headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json',
			    },
			    body: JSON.stringify({
			        product: this.props.cart.id,
			        quantity: this.props.cart.quantity,
			    })
			})
				.then(result=>result.json())
	            .then(cart=>this.setState({cart}))
	    }

    }

    render() {
    	if(this.state.cart){
    		if(!this.props.cartkey){
    			this.props.Action(this.state.cart.code);
    		}
    	} 
        return (
        	<li className="item">
                <div className="item-image">
                    <img src="" alt="Item 1"/>
                </div>
                <div className="item-detail">
                    <p className="name">Crackle Plates</p>
                    <p className="price">$22.00</p>
                    <p className="amount">x2</p>
                </div>
                <span className="remove"></span>
            </li>
        )
    }
}

const keyStateToProps = (state) => {
    return {
        cartkey : state.cartkey.cartkey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Action : (e) => dispatch(cartkey(e))
    }
}

export default connect(keyStateToProps, mapDispatchToProps)(Cartbox);