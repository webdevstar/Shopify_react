import React, { Component } from 'react';
import './login.css'
import bgpage01 from '../../images/bg-page_01.jpg';

class LoginPage extends Component {

    render() {
        return (
            <div>
            <section>
                <div className="pageintro">
                    <div className="pageintro-bg">
                        <img src={bgpage01} alt="About Us"/>
                    </div>
                    <div className="pageintro-body">
                        <h1 className="pageintro-title">My account</h1>
                        <nav className="pageintro-breadcumb">
                            <ul>
                                <li>
                                    <a className="a">Home</a>
                                </li>
                                <li>
                                    <a className="a">My Account</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
                <section>
                    <div className="container py-70 py-tn-40">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="au-form-body p-r-lg-15 p-r-xl-15">
                                    <h2 className="au-form-title form-title-border">Login</h2>
                                    <fieldset className="m-t-40">
                                        <form>
                                            <div className="form-group au-form require">
                                                <label>Username or email address</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-group au-form require">
                                                <label>Password</label>
                                                <input type="password"/>
                                            </div>
                                            <div className="form-group au-form">
                                                <button type="submit">Login</button>
                                                <div className="form-checkbox m-l-18 m-t-tn-10 m-l-tn-0">
                                                    <input type="checkbox"/>
                                                    <label>Remember me</label>
                                                </div>
                                                <div className="form-forgot w-100 m-t-10">
                                                    <a className="a">Lost your password?</a>
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="au-form-body p-r-lg-15 p-r-xl-15">
                                    <h2 className="au-form-title  form-title-border">REGISTER</h2>
                                    <fieldset className="m-t-40">
                                        <form>
                                            <div className="form-group au-form require">
                                                <label>Email address</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-group au-form require">
                                                <label>Password</label>
                                                <input type="password"/>
                                            </div>
                                            <div className="form-group au-form">
                                                <button type="submit">REGISTER</button>
                                                <div className="w-100 m-t-10 hidden">.</div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default LoginPage;