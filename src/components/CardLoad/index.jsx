import React from 'react';
import './style.css';

class CardLoad extends React.Component {

	render() {
        return ( 
        	<div className="CardLoadClass">
        		<span className = "loadIcon"><i className="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true"></i></span>
        	</div>
        	);
    }
}

export default CardLoad;