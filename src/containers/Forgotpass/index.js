import React, { Component } from 'react';
import './forgotpass.css'

import {Loader1} from '../../components/Loader/index.jsx';
import bgpage01 from '../../images/bg-page_01.jpg';

class Forgotpass extends Component {

    render() {
        return (
            <div>
                <Loader1/>
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
                    <div className="container py-90 py-tn-40">
                        <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password
                            via email.</p>
                        <div className="form-account py-0">
                            <form>
                                <div className="form-group au-form m-b-20">
                                    <div className="form-resetpass">
                                        <label className="m-b-15">Username or email</label>
                                        <input type="text"/>
                                    </div>

                                </div>
                                <div className="form-group au-form m-b-10">
                                    <button className="btn btn-black text-uppercase btn-small">Reset password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Forgotpass;