import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Loader1} from '../../components/Loader/index.jsx';
import { cartTo } from '../../actions/cart_item'
import { cartkey } from '../../actions/cartkey'
import './productdetails.css'

import page03 from '../../images/bg-page_03.jpg';

export class ListingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productdetails: false,
            reviews: false
        };
    }

    handleOnclick (event) {
        if(!this.props.cartkey){
            fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: this.state.productdetails.id,
                    quantity: 1
                })
            })
                .then(result=>result.json())
                .then(cart=>{ this.props.addcartkey(cart.code); this.props.cartTo(cart)})
        }
        else {
            var quantity = this.refs.quantity.value;
            fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/cart/'+this.props.cartkey, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: this.state.productdetails.id,
                    quantity: quantity
                })
            })
                .then(result=>result.json())
                .then(cart=>this.props.cartTo(cart))
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products/'+id+'?lang=en')
            .then(result=>result.json())
            .then(productdetails=>{
                this.setState({ productdetails: productdetails })
                document.getElementById("description").innerHTML = productdetails.description.description;
            })
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products/'+id+'/reviews')
            .then(result=>result.json())
            .then(reviews=>{
                this.setState({ reviews: reviews })
                document.getElementById("review_discription").innerHTML = reviews[0].description+"<br/>"+reviews[0].date;
            })
    }

    productcolor(){
        if(this.state.productdetails.options){
            this.state.productdetails.options[0].optionValues.map((color, ind)=> {
                return (
                    <div className="color" key={ind}>
                        <input type={this.state.productdetails.options.type} checked={color.defaultValue}/>
                        <span>{color.name}</span>
                        <span>{color.price? color.price:''}</span>
                    </div>
                )
            })
        }
    }

    render() {
        var pricestate = false
        if(this.state.productdetails.originalPrice === this.state.productdetails.finalPrice) pricestate = true
        return (
            <div id="productdetails">
                <Loader1/>
                <section>
                    <div className="pageintro">
                        <div className="pageintro-bg">
                            <img src={page03} alt="About Us"/>
                        </div>
                        <div className="pageintro-body">
                            <h1 className="pageintro-title">Shop</h1>
                            <nav className="pageintro-breadcumb">
                                <ul>
                                    <li>
                                        <a className="a">Home</a>
                                    </li>
                                    <li>
                                        <a className="a">Shop</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container p-b-90 p-t-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-detail">
                                    <div className="shop-product p-t-25">
                                        <div className="slide100-01" id="slide100-01">
                                            <div className="main-wrap-pic">
                                                <div className="main-frame">
                                                    <div className="wrap-main-pic">
                                                        <div className="main-pic">
                                                            <img id="productDetailsImg" src={(this.state.productdetails? this.state.productdetails.image.imageUrl:'')} alt="prodetail01"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-body">
                                            <h3 className="name">{(this.state.productdetails? this.state.productdetails.description.name:'')}</h3>
                                            <div className="price">
                                                {
                                                    (pricestate === true?<p className="price">{this.state.productdetails.originalPrice}</p>:
                                                    <div>
                                                        <p className="originalPrice">{this.state.productdetails.originalPrice}</p>
                                                        <p className="finalPrice">{this.state.productdetails.finalPrice}</p>
                                                    </div>)
                                                }
                                            </div>
                                            <p className="product-color">
                                                {
                                                    this.productcolor()
                                                }
                                            </p>
                                            <p id="description" className="description"></p>
                                            <div className="product-button">
                                                <div className="quantity">
                                                    <span className="sub">
                                                        <i className="fa fa-angle-down"></i>
                                                    </span>
                                                    <input type="number" ref="quantity" defaultValue="2"/>
                                                    <span className="add">
                                                        <i className="fa fa-angle-up"></i>
                                                    </span>
                                                </div>
                                                <a className="a add-to-cart" onClick={()=>this.handleOnclick()}>Add to cart</a>
                                            </div>
                                            <div className="product-available">
                                                <span>Available :</span>
                                                <a className="a">In stock</a>
                                            </div>
                                            <div className="product-sku">
                                                <span className="text-black">SKU: </span>
                                                {(this.state.productdetails? this.state.productdetails.sku:'')}
                                            </div>
                                            <div className="product-categories">
                                                <span className="text-black">Categories:</span>
                                                {
                                                    (this.state.productdetails?
                                                        this.state.productdetails.categories.map((categorie, ind) =>
                                                            <a className="a" key={ind}>{categorie.description.name}</a>
                                                        )
                                                    :'')
                                                    
                                                }
                                            </div>
                                            <div className="product-share">
                                                <span className="text-black">Share: </span>
                                                <ul className="social-media style-3">
                                                    <li>
                                                        <a className="a facebook">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="a twiiter">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="a linkedin">
                                                            <i className="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="a google-plus">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-rating" data-star={(this.state.productdetails? this.state.productdetails.rating:0)}></div>
                                        </div>
                                    </div>
                                    <div className="au-tabs">
                                        <ul className="nav nav-tabs">
                                            <li className="active">
                                                <a data-toggle="tab" href="#description-tab" className="active show">Description</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#additional-tab">additional information </a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#review-tab">review (0)</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="description-tab" className="tab-pane active">
                                                <p id="description_new"></p>
                                            </div>
                                            <div id="additional-tab" className="tab-pane">
                                                <table className="product-additionnal">
                                                    <tbody>
                                                        <tr>
                                                            <th>Weight</th>
                                                            <td>3,1 kg</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimensions</th>
                                                            <td>60 x 60 x 60 cm</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div id="review-tab" className="tab-pane">
                                                <h5 className="title">REVIEWS</h5>
                                                <p id="review_discription"></p>
                                                <p className="text-bigger">Be the first to review “Cloud Wall Clock”</p>
                                                <div className="comment-rating">
                                                    <strong>Your Rating </strong>
                                                    <div className="au-rating">
                                                        <form>
                                                            <input id="star-1" type="radio" name="star" />
                                                            <label htmlFor="star-1"></label>
                                                            <input id="star-2" type="radio" name="star" />
                                                            <label htmlFor="star-2"></label>
                                                            <input id="star-3" type="radio" name="star" />
                                                            <label htmlFor="star-3"></label>
                                                            <input id="star-4" type="radio" name="star" />
                                                            <label htmlFor="star-4"></label>
                                                            <input id="star-5" type="radio" name="star" />
                                                            <label htmlFor="star-5"></label>
                                                        </form>
                                                    </div>

                                                </div>
                                                <div className="comment-place">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <textarea cols="30" rows="7" placeholder="Your Message"></textarea>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input type="text" placeholder="Your Name"/>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input type="email" placeholder="Your Email"/>
                                                            </div>
                                                            <div className="col-md-12 m-t-40">
                                                                <button>Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const keyStateToProps = (state) => {
    return {
        cartkey : state.cartkey.cartkey,
        cart_items : state.cart.cart_items,
        showtype : state.show.showtype
    }
}

const keyDispatchToProps = (dispatch) => {
    return {
        addcartkey : (e) => dispatch(cartkey(e)),
        cartTo : (e) => dispatch(cartTo(e))
    }
}

export default connect(keyStateToProps, keyDispatchToProps) (ListingPage);