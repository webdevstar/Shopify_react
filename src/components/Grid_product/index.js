import React, { Component } from 'react';

import product_04 from '../../images/product_04.png';
import product_05 from "../../images/product_05.png";
import product_06 from "../../images/product_06.png";
import product_07 from "../../images/product_07.png";
import product_08 from "../../images/product_08.png";
import product_09 from "../../images/product_09.png";
import product_10 from "../../images/product_10.png";
import product_11 from "../../images/product_11.png";

export class Grid_product extends Component {

    render() {
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
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item chair">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_04} alt="Chair"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Ignacio Chairs</a>
		                                <div className="price">$39.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item lamp">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_05} alt="Chair"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Diamond Lamp</a>
		                                <div className="price">$23.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item sofa">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_06} alt="Table" className="m-b-10"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">High Table</a>
		                                <div className="price">$15.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item lamp">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_07} alt="Lamp"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Pendant Shade</a>
		                                <div className="price">$20.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item decor">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_08} alt="Lamp"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Aslesha Basket</a>
		                                <div className="price">$27.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item lamp">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_09} alt="Lamp"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Driva Table Lamp</a>
		                                <div className="price">$56.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item lamp">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_10} alt="Lamp"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Hanging Sphere</a>
		                                <div className="price">$18.00</div>
		                            </div>
		                        </div>
		                        <div className="col-lg-3 col-md-4 col-sm-6 grid-item lamp">
		                            <div className="grid-product">
		                                <div className="image bg-lightblue">
		                                    <a href="#">
		                                        <img src={product_11} alt="Lamp"/>
		                                    </a>
		                                    <div className="addcart">
		                                        <a href="#">Add to cart</a>
		                                    </div>
		                                </div>
		                                <a href="#" className="name">Portable Speaker</a>
		                                <div className="price">$42.00</div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
        )
    }
}

export default Grid_product;