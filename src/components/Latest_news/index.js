import React, { Component } from 'react';

import project_01 from '../../images/project_01.jpg';
import project_02 from '../../images/project_02.jpg';

import brand_01 from '../../images/brand_01.png';
import brand_02 from '../../images/brand_02.png';
import brand_03 from '../../images/brand_03.png';
import brand_04 from '../../images/brand_04.png';
import brand_05 from '../../images/brand_05.png';

export class Latest_news extends Component {

	constructor(props) {
        super(props);
        this.state = {
            contents: false
        }
    }

    componentDidMount() {
        fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/content/summary')
            .then(result=>result.json())
            .then(contents=>{
            	this.setState({contents})
            	document.getElementById("contentbox0").innerHTML = contents[0].boxContent
        		document.getElementById("contentbox1").innerHTML = contents[1].boxContent
            })
    }

    render() {
    	return (
	        <div>
	        	<section className="p-t-100 p-b-80">
			        <div className="container">
			            <div className="row justify-content-center">
			                <div className="col-md-8">
			                    <div className="port-title text-center py-10">
			                        <h2 className="title">Latest News</h2>
			                        <p className="title-detail">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
			                            born and I will give you a complete account.</p>
			                        <div className="title-border mx-auto"></div>
			                    </div>
			                </div>
			            </div>
			            <div className="row m-t-40 py-20">
			                <div className="owl-carousel" data-loop="true" data-responsive='{"0":{"items":"1"},"768":{"items":"1"}, "992":{"items":"2"} }'>
			                    <div className="project">
					                <div className="project-image">
					                    <a href="#">
					                        <img src={this.state.contents? this.state.contents[0].image:''} alt="Project 1"/>
					                    </a>
					                </div>
					                <div className="project-body">
					                    {/*<p className="date">
					                        <span className="day">12</span>
					                        <span className="month">June</span>
					                    </p>*/}
					                    <a href="#" className="name">{this.state.contents? this.state.contents[0].name:''}</a>
					                    <div id="contentbox0"></div>
					                </div>
					            </div>
					            <div className="project">
					                <div className="project-image">
					                    <a href="#">
					                        <img src={this.state.contents? this.state.contents[1].image:''} alt="Project 1"/>
					                    </a>
					                </div>
					                <div className="project-body">
					                    {/*<p className="date">
					                        <span className="day">12</span>
					                        <span className="month">June</span>
					                    </p>*/}
					                    <a href="#" className="name">{this.state.contents? this.state.contents[1].name:''}</a>
					                    <div id="contentbox1"></div>
					                </div>
					            </div>
			                </div>
			            </div>
			        </div>
			    </section>

			    <section className="py-70 bg-signup">
			        <div className="container">
			            <div className="row justify-content-end">
			                <div className="col-lg-6 col-md-8 col-sm-12">
			                    <div className="port-title m-t-41">
			                        <h2 className="title wow slideInRight" data-wow-duration="1s">SIGN UP FOR NEWSLETTER</h2>
			                        <p className="description wow slideInUp" data-wow-duration="1s">But I must expl’ain to you how all this mistaken idea of denouncing pleasure and praising pain was
			                            born and I will give.</p>
			                        <div className="title-border"></div>
			                    </div>
			                    <div className="signup-form">
			                        <form>
			                            <input type="text" placeholder="Your email address"/>
			                            <button type="submit">Submit</button>
			                        </form>
			                        <nav className="social-media">
			                            <ul>
			                                <li>
			                                    <a href="#">
			                                        <i className="fa fa-facebook"></i>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <i className="fa fa-twitter"></i>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <i className="fa fa-linkedin"></i>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <i className="fa fa-google-plus"></i>
			                                    </a>
			                                </li>
			                            </ul>
			                        </nav>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </section>

			    <section className="py-50">
			        <div className="container">
			            <div className="owl-carousel" data-loop="true" data-responsive='{"0":{"items":"1"}, "576":{"items":"2"}, "768":{"items":"4"}, "992":{"items":"5"}}'>
			                <div className="brand">
			                    <img src={brand_01} alt="Brand 1"/>
			                </div>
			                <div className="brand">
			                    <img src={brand_02} alt="Brand 2"/>
			                </div>
			                <div className="brand">
			                    <img src={brand_03} alt="Brand 3"/>
			                </div>
			                <div className="brand">
			                    <img src={brand_04} alt="Brand 4"/>
			                </div>
			                <div className="brand">
			                    <img src={brand_05} alt="Brand 5"/>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
        )
    }
}

export default Latest_news ;