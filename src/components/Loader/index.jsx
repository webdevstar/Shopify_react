import React from 'react';
import './Loader.css';

class Loader extends React.Component {

	constructor() {
		super();
		this.state = {
			showingAlert: true
		};
		this.handleLoad = this.handleLoad.bind(this)
	}

	componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad(){
	    setTimeout(() => {
			this.setState({
				showingAlert: false
			});
	    }, 1000);
    }

	render() {
		return (
			<div className={`loading ${this.state.showingAlert ? '' : 'alert-hidden'}`}>
		        <div className="spinner">
		            <div className="double-bounce1"></div>
		            <div className="double-bounce2"></div>
		        </div>
		    </div>
		)
	}
}

export default Loader