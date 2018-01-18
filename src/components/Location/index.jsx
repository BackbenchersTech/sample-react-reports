import React from 'react';
import  {Row ,Col } from 'react-bootstrap';
import './style.css';

class Location extends React.Component {
	render() {
        return ( 
        	<div className = "Maincontainer">
        		<Row className = "addressrow1">
        			<Col md = {4} xs={12} className = "addressCol1">
        			<div className = "wrapper">
        				<Row className = "address1">
        					<div className = "address1Col1Image">
        						<img src={require('./texas.jpg')} alt="chart" className = "beckimage"/>
        					</div>
        				</Row>
        				<Row className = "address1detail">
        					<div className = "locationAddress">
						        	<h4 className = "companyName">OpenLogix Corporation</h4>
						        	<ul className = "addressList">
						        		<li className="addressListDetail">
						        			<i className="fa fa-map-marker" aria-hidden="true"></i>		
						        			<p className="addDetail">28345 Beck Road, Suite 308
												Wixom, Michigan 48393</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-phone" aria-hidden="true"></i>
						        			<p className="addDetail">(248) 869-0080</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-envelope" aria-hidden="true"></i>
						        			<p className="addDetail">info@open-logix.com</p>
						        		</li>
						        	</ul>
						       	</div>
        				</Row>
        				</div>
        				</Col>

        				<Col md = {4} xs={12} className = "addressCol1">
        				<div className = "wrapper">
        				<Row className = "address1">
        					<div className = "address1Col1Image">
        						<img src={require('./beck.jpg')} alt="chart" className = "beckimage"/>
        					</div>
        				</Row>
        				<Row className = "address1detail">
        					<div className = "locationAddress">
						        	<h4 className = "companyName">Houston Sales Office</h4>
						        	<ul className = "addressList">
						        		<li className="addressListDetail">
						        			<i className="fa fa-map-marker" aria-hidden="true"></i>		
						        			<p className="addDetail">25307 I-45 N, Suite 140
The Woodlands, TX 77380</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-phone" aria-hidden="true"></i>
						        			<p className="addDetail">(832) 675-9466</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-envelope" aria-hidden="true"></i>
						        			<p className="addDetail">houston@open-logix.com</p>
						        		</li>
						        	</ul>
						       	</div>
        				</Row>
        				</div>
        				</Col>

        				<Col md = {4} xs={12} className = "addressCol1">
        				<div className = "wrapper">
        				<Row className = "address1">
        					<div className = "address1Col1Image">
        						<img src={require('./texas.jpg')} alt="chart" className = "beckimage"/>
        					</div>
        				</Row>
        				<Row className = "address1detail">
        					<div className = "locationAddress">
						        	<h4 className = "companyName">India Headquarters</h4>
						        	<ul className = "addressList">
						        		<li className="addressListDetail">
						        			<i className="fa fa-map-marker" aria-hidden="true"></i>		
						        			<p className="addDetail">4-58-2/9, MIG 80,
Lawsons Bay Colony, Vizag,
AP 530 017</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-phone" aria-hidden="true"></i>
						        			<p className="addDetail">+91-891-2736909</p>
						        		</li>
						        		<li className="addressListDetail">
						        			<i className="fa fa-envelope" aria-hidden="true"></i>
						        			<p className="addDetail">india@open-logix.com</p>
						        		</li>
						        	</ul>
						       	</div>
        				</Row>
        				</div>
        				</Col>

        				</Row>
        	</div>
        	);
    }
}

export default Location;