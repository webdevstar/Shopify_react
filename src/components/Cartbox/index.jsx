import React, { Component } from 'react';

export class Cartbox extends Component {

	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<li className="item">
                <div className="item-image">
                    <img src="" alt="Item 1"/>
                </div>
                <div className="item-detail">
                    <p className="name">Crackle Plates</p>
                    <p className="price">$22.00</p>
                    <p className="amount">x2</p>
                </div>
                <span className="remove"></span>
            </li>
        )
    }
}

export default Cartbox;