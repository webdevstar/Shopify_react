import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartTo } from '../../actions/cart_item'
import { cartkey } from '../../actions/cartkey'

import './shoplist.css'

export class ShopList extends Component {

    handleOnclick (event) {
        if(!this.props.cartkey){
            fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: this.props.list.id,
                    quantity: 1
                })
            })
                .then(result=>result.json())
                .then(cart=>{ this.props.addcartkey(cart.code); this.props.cartTo(cart)})
        }
        else {
            var quantity = 1;
            this.props.cart_items.products.forEach((product) => {
                if(product.id === this.props.list.id) quantity = product.quantity+1
            })
            fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart/'+this.props.cartkey, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: this.props.list.id,
                    quantity: quantity
                })
            })
                .then(result=>result.json())
                .then(cart=>this.props.cartTo(cart))
        }
    }

    render() {
        return (
            <div className="shop-product">
                <div className="product-image">
                    <a className="a">
                        <img src={this.props.list.image.imageUrl} alt="Product"/>
                    </a>
                </div>
                <div className="product-body">
                    <a className="a name">{this.props.list.description.name}</a>
                    <div className="price">
                        <p className="originalPrice">{this.props.list.originalPrice}</p>
                        <p className="finalPrice">{this.props.list.finalPrice}</p>
                    </div>
                    <div className="addcart">
                        <div onClick={()=>this.handleOnclick()}>
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <p className="product-color">
                        <span className="color beige"></span>
                        <span className="color gray"></span>
                    </p>
                    <p className="description">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
                        it is pain, but because occasionally circumstances occur in which toil and pain can
                        procure him some great pleasure.</p>
                    <div className="product-button">
                        <a className="a add-to-cart">Add to cart</a>
                        <a className="a add-to-wishlist"> </a>
                    </div>
                    <div className="product-rating" data-star="4"></div>
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

export default connect(keyStateToProps, keyDispatchToProps) (ShopList);