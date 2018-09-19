import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';
import { changeshowlist } from '../../actions/changeshowlist'
import ShopList from '../../components/ShopList';
import totop from '../../images/icon/to_top.png';
import './listingpage.css'

import page03 from '../../images/bg-page_03.jpg';
import Grid from '../../images/icon/layout_grid.png';
import List from '../../images/icon/layout_list.png';
import Search from '../../images/icon/search.png';

export class ListingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shoplist: {products:[]}
        };
    }

    clickshowtype() {
        this.props.showtype("cart")
        // console.log(this.refs.grid.id);
    }

    componentDidMount() {
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products?lang=en&category=3&start=0 &count=12')
            .then(result=>result.json())
            .then(shoplist=>this.setState({ shoplist: shoplist }))
    }

    render() {
        return (
            <div>
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
                    <div className="container p-t-100 p-b-70">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="shop-list">
                                    <div className="shop-list-heading">
                                        <div className="number-product">
                                            Showing
                                            <span>8</span>-
                                            <span>20</span> of
                                            <span>64</span> results
                                        </div>
                                        <div className="shop-view-layout">
                                            <span>Show</span>
                                            <span id="layout_grid" ref="grid" onClick={()=>this.clickshowtype()}>
                                                <img src={Grid} alt="Grid"/>
                                            </span>
                                            <span id="layout_list">
                                                <img src={List} alt="List"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="shop-list-body shop-grid">
                                        {
                                            this.state.shoplist.products.map((list, ind) =>
                                                <ShopList key={ind} list={list}/>
                                            )
                                        }
                                    </div>
                                    <nav className="border-bottom-1 border-top-1">
                                        <ul className="au-panigation">
                                            <li className="panigation-item">
                                                <a className="a panigation-link">
                                                    <i className="fa fa-angle-left"></i>
                                                </a>
                                            </li>
                                            <li className="panigation-item">
                                                <span>Pages:</span>
                                            </li>
                                            <li className="panigation-item active">
                                                <a className="a panigation-link">01</a>
                                            </li>
                                            <li className="panigation-item">
                                                <a className="a panigation-link">02</a>
                                            </li>
                                            <li className="panigation-item">
                                                <span>...</span>
                                            </li>
                                            <li className="panigation-item">
                                                <a className="a panigation-link">06</a>
                                            </li>
                                            <li className="panigation-item">
                                                <a className="a panigation-link">07</a>
                                            </li>
                                            <li className="panigation-item">
                                                <a className="a panigation-link">
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="page-sidebar">
                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">Search</h3>
                                            <div className="title-border m-b-30"></div>
                                        </div>
                                        <div className="sidebar-item__body m-b-8">
                                            <div className="sidebar-search">
                                                <input type="text"/>
                                                <span>
                                                    <img src={Search} alt="Search"/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">filter by price</h3>
                                            <div className="title-border m-b-30"></div>
                                        </div>
                                        <div className="sidebar-item__body m-b-8">
                                            <div className="sidebar-filter-price">
                                                <div id="filter-price"></div>
                                                <div className="filter-range">
                                                    <div className="filter-range-value">
                                                        Filter:
                                                        <span id="filter-price-value-lower">$100</span>
                                                        <span> - </span>
                                                        <span id="filter-price-value-upper">$500</span>
                                                    </div>
                                                    <div className="filter-button">
                                                        <a className="a">Filter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">categories</h3>
                                            <div className="title-border m-b-24"></div>
                                        </div>
                                        <div className="sidebar-item__body">
                                            <ul className="sidebar-list">
                                                <li>
                                                    <a className="a">Sofa</a>
                                                    <span className="number">35</span>
                                                </li>
                                                <li>
                                                    <a className="a">Chair</a>
                                                    <span className="number">18</span>
                                                </li>
                                                <li>
                                                    <a className="a">Decor</a>
                                                    <span className="number">12</span>
                                                </li>
                                                <li>
                                                    <a className="a">Lamp</a>
                                                    <span className="number">22</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">shop by color</h3>
                                            <div className="title-border m-b-24"></div>
                                        </div>
                                        <div className="sidebar-item__body">
                                            <ul className="sidebar-list sidebar-color">
                                                <li>
                                                    <a className="a">
                                                        <span className="color black"></span>
                                                        Black
                                                    </a>
                                                    <span className="number">35</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color blue"></span>
                                                        Blue
                                                    </a>
                                                    <span className="number">20</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color gray"></span>
                                                        gray
                                                    </a>
                                                    <span className="number">08</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color green"></span>
                                                        green
                                                    </a>
                                                    <span className="number">12</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color red"></span>
                                                        red
                                                    </a>
                                                    <span className="number">34</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color beige"></span>
                                                        beige
                                                    </a>
                                                    <span className="number">16</span>
                                                </li>
                                                <li>
                                                    <a className="a">
                                                        <span className="color yellow"></span>
                                                        yellow
                                                    </a>
                                                    <span className="number">29</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">SHOP BY SIZE</h3>
                                            <div className="title-border m-b-24"></div>
                                        </div>
                                        <div className="sidebar-item__body">
                                            <ul className="sidebar-list">
                                                <li>
                                                    <a className="a">XS</a>
                                                    <span className="number">22</span>
                                                </li>
                                                <li>
                                                    <a className="a">S</a>
                                                    <span className="number">14</span>
                                                </li>
                                                <li>
                                                    <a className="a">M</a>
                                                    <span className="number">31</span>
                                                </li>
                                                <li>
                                                    <a className="a">L</a>
                                                    <span className="number">48</span>
                                                </li>
                                                <li>
                                                    <a className="a">XL</a>
                                                    <span className="number">36</span>
                                                </li>
                                                <li>
                                                    <a className="a">XLL</a>
                                                    <span className="number">25</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page-sidebar-item">
                                        <div className="sidebar-item__heading">
                                            <h3 className="title">Best seller</h3>
                                            <div className="title-border m-b-30"></div>
                                        </div>
                                        <div className="sidebar-item__body">
                                            <ul className="sidebar-bestsell">
                                                <li className="item">
                                                    <div className="image">
                                                        <a className="a">
                                                            <img src="images/wishlist_product_01.png" alt="#"/>
                                                        </a>
                                                    </div>
                                                    <div className="detail">
                                                        <a className="a name">Crackle Plates</a>
                                                        <span className="price">$22.00</span>
                                                    </div>
                                                </li>
                                            </ul>
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

const showDispatchToProps = (dispatch) => {
    return {
        showtype : (e) => dispatch(changeshowlist(e))
    }
}

export default connect(showDispatchToProps) (ListingPage);