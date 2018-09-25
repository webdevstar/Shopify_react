import React, { Component } from 'react';
import {connect} from "react-redux";
import {translate} from 'react-i18next';
import { Link } from 'react-router-dom'

export class Menu extends Component {

    render() {
        const { t } = this.props;
        return (
        	<li className="">
                <Link to={"/listing"} className="a">{t(this.props.category.code)}</Link>
                {
                    (this.props.category.children.length > 0 ?
                        <ul className="sub-menu">
                            {
                                this.props.category.children.map((children, ind) =>
                                    <li key={ind} style={{overflow:"hidden"}}>
                                        <Link to={"/listing"} className="a">{t(children.code : '')}</Link>
                                    </li>
                                )
                            }
                        </ul>
                        : ''
                    )
                }
            </li>
        )
    }
}

export default connect()(translate("translations")(Menu));