import React, {Component} from 'react';
import {translate} from 'react-i18next';
import { connect } from 'react-redux';

import LanuageSelector from '../LanguageSelector'
import Cartbox from '../Cartbox/index.jsx';
import configureStore from '../../store/configureStore';
import { search } from '../../actions/search'

import './Header.css';

import logo_01 from '../../images/icon/logo_01.png';
import header_search from '../../images/icon/header-search.png';
import header_cart from '../../images/icon/header-cart.png';
import product_01 from '../../images/product_01.png';
import product_02 from '../../images/product_02.png';
import product_03 from '../../images/product_03.png';
import header_bar from '../../images/icon/header-bar.png';

import logo_02 from '../../images/icon/logo_02.png';
import close_gray from '../../images/icon/close_gray.png';
import resume_01 from '../../images/resume_01.jpg';
import resume_02 from '../../images/resume_02.jpg';
import resume_03 from '../../images/resume_03.jpg';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchresult: false,
        };
    }

    handleKeyPress (event) {
        if(event.key == 'Enter'){
            const value = event.target.value;
            if(value == ""){
                fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products/group/FEATURED_ITEM')
                    .then(result=>result.json())
                    .then(products=>this.props.search(products))
            }
            else {
                fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/search', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        count: 100,
                        query: value,
                        start: 0
                    })
                })
                    .then(result=>result.json())
                    .then(searchresult=>this.props.search(searchresult))
            }
        }
    }

    componentDidMount() {
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/marketplace/DEFAULT')
            .then(result=>result.json())
            .then(merchant=>this.setState({merchant}))
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/category?filter=FEATURED')
            .then(result=>result.json())
            .then(category=>this.setState({category}))
    }

    render () {
        const carts = this.props.cart_items;
        const { t, i18n } = this.props;
        return (
            <div>
                <header>
                    <div className="header-wrapper">
                        <div className="header-wrapper-desktop d-none d-lg-block">
                            <div className="header header-style-1">
                                <div className="header-main">
                                    <div className="header__logo">
                                        <a href="#">
                                            <img src={this.state.merchant ? this.state.merchant.store.logo.path : ''} className="logo_02" alt="Lyrae"/>
                                        </a>
                                    </div>
                                    <nav className="header__navbar">
                                        <ul className="navbar-menu">
                                            <li className="active">
                                                <a href="#">{this.state.category ? this.state.category[0].description.name : ''}</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">{t('living room')}</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">{this.state.category ? this.state.category[1].description.name : ''}</a>
                                            </li>
                                            <li>
                                                <LanuageSelector/>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="header__button">
                                        <ul>
                                            <li className="header-search">
                                                <div className="search-button">
                                                    <img src={header_search} alt="Search"/>
                                                </div>
                                                <div className="search-input">
                                                    <input type="text" name="search" onKeyPress={(e)=>this.handleKeyPress(e)} placeholder="Start typing here..."/>
                                                    <a href="#"></a>
                                                </div>
                                            </li>

                                            <li className="header-shop-cart">
                                                <div className="shop-cart-button">
                                                    <img src={header_cart} alt="Cart"/>
                                                    <span className="amount">3</span>
                                                </div>
                                                <div className="shop-cart">
                                                    <ul>
                                                        {
                                                            carts.products.map((cart, ind) =>
                                                                <Cartbox key={ind} cart={cart}/>
                                                            )
                                                        }
                                                    </ul>
                                                    <div className="checkout m-t-26">
                                                        <p>Subtotal
                                                            <span className="sub-total">{carts.products.length >0 ? carts.displaySubTotal : "US$0.00"}</span>
                                                        </p>
                                                        <p>Total
                                                            <span className="total">{carts.products.length >0 ? carts.displayTotal : "US$0.00"}</span>
                                                        </p>
                                                        <a href="#">Checkout</a>
                                                    </div>
                                                </div>
                                            </li>
                                             <li className="header-shop-cart">
                                                <div className="bar-button" data-toggle="modal">
                                                    MyAccount
                                                </div>
                                                <div className="shop-cart user">
                                                    <ul className="shop-cart__list">
                                                        <li className="item">
                                                            Register
                                                        </li>
                                                        <li className="item">
                                                            Signin
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-wrapper-mobile d-block d-lg-none">
                            <div className="header-mobile__bar">
                                <div className="header-mobile__logo">
                                    <img src={logo_01} alt="Lyrae"/>
                                </div>
                                <div className="header-mobile__button">
                                    <span className="humburger-box">
                                        <span className="hamburger__inner"></span>
                                    </span>
                                </div>
                            </div>
                            <nav className="header-mobile__navbar">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="index.html">Homepage_v1</a>
                                            </li>
                                            <li>
                                                <a href="index2.html">Homepage_v2</a>
                                            </li>
                                            <li>
                                                <a href="index3.html">Homepage_v3</a>
                                            </li>
                                            <li>
                                                <a href="index4.html">Homepage_v4</a>
                                            </li>
                                            <li>
                                                <a href="index5.html">Homepage_v5</a>
                                            </li>
                                            <li>
                                                <a href="index6.html">Homepage_v6</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Page</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="my-account.html">My Account</a>
                                            </li>
                                            <li>
                                                <a href="forget-password.html">Forget Password</a>
                                            </li>
                                            <li>
                                                <a href="coming-soon.html">Cooming Soon</a>
                                            </li>
                                            <li>
                                                <a href="404.html">404 Error</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="shop-list.html">Shop 1</a>
                                            </li>
                                            <li>
                                                <a href="shop-list-nosidebar.html">Shop 2</a>
                                            </li>
                                            <li>
                                                <a href="product-detail.html">Product Detail 1</a>
                                            </li>
                                            <li>
                                                <a href="product-detail-nosidebar.html">Product Detail 2</a>
                                            </li>
                                            <li>
                                                <a href="shop-cart.html">Shop Cart</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wish List</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Check Out</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog-grid-1.html">Blog Grid 1</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid-2.html">Blog Grid 2</a>
                                            </li>
                                            <li>
                                                <a href="blog-list.html">Blog List</a>
                                            </li>
                                            <li>
                                                <a href="blog-detail.html">Blog Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                
                <div className="sidebar">
                    <div className="sidebar__body ">
                        <div className="sidebar__heading">
                            <div className="logo">
                                <img src={logo_02} alt="Lyrae"/>
                            </div>
                            <span className="sidebar__close">
                                <img src={close_gray} alt="Close"/>
                            </span>
                        </div>
                        <div className="sidebar__content">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                at its layout.</p>
                            
                            <div className="sidebar__image my-51">
                                <div className="slick-item">
                                    <img src={resume_01} alt="Image 1"/>
                                </div>
                                <div className="slick-item">
                                    <img src={resume_02} alt="Image 2"/>
                                </div>
                                <div className="slick-item">
                                    <img src={resume_03} alt="Image 3"/>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <div className="title-border mx-auto m-t-27 m-b-33"></div>
                            <nav className="social-media style-2">
                                <ul>
                                    <li>
                                        <a href="#" className="facebook"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin"></a>
                                    </li>
                                    <li>
                                        <a href="#" className="google-plus"></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart_items : state.cart.cart_items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        search : (e) => dispatch(search(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (translate("translations")(Header));