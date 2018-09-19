import React, { Component } from 'react';
import {connect} from "react-redux";
import {translate} from 'react-i18next';

export class Menu extends Component {

    render() {
        const { t } = this.props;
        return (
        	<li className="">
                <a className="a">{t(this.props.category.code)}</a>
                {
                    (this.props.category.children.length > 0 ?
                        <ul className="sub-menu">
                            {
                                this.props.category.children.map((children, ind) =>
                                    <li key={ind} style={{overflow:"hidden"}}>
                                        <a className="a">{t(children.code : '')}</a>
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