import React, { Component } from 'react';
import {connect} from "react-redux";

import './cartbox.css'

export class Cartbox extends Component {

    render() {
        return (
        	<li className="item">
                <div className="item-image">
                    <img src={this.props.cart.image.imageUrl} alt="Item1"/>
                </div>
                <div className="item-detail">
                    <p className="name">{this.props.cart.description.name}</p>
                    <p className="price">$ {this.props.cart.price}</p>
                    <p className="amount">x{this.props.cart.quantity}</p>
                </div>
                <span className="remove"></span>
            </li>
        )
    }
}

// const keyStateToProps = (state) => {
//     return {
//         cartkey : state.cartkey.cartkey
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Action : (e) => dispatch(cartkey(e))
//     }
// }

export default connect()(Cartbox);