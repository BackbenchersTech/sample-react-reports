import React from 'react';
import  {Row ,Col } from 'react-bootstrap';
import './style.css';

class Location extends React.Component {
	render() {
        return ( 
        	<div className = "container">
        		<Row className = "addressrow1">
        			<Col sm = {8} className = "addressCol1">
        				<Row className = "address1">
        					<Col xs={12} md = {6} className = "address1Col1Image">
        						<img src={require('./beck.jpg')} alt="chart" className = "beckimage"/>
        					</Col>
        					<Col xs={12} md = {6} className = "addressCol1Address">
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
        					</Col>
        				</Row>
        				<Row className = "address2">
        				<Col xs={12} md = {6} className = "address2Col1Image">
        					<img src={require('./beck.jpg')} alt="chart" className = "dallasimage"/>
        				</Col>
        				<Col xs={12} md = {6} className = "address2Col1Address">
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
        					</Col>
        				</Row>
        			</Col>
        			<Col sm = {4} className = "addressCol2">
        			<Row>
        				<Col sm={12}>
        				<div className = "addressImage">
        					<img src={require('./beck.jpg')} alt="chart" className = "vizagimage"/>
        				</div>
        				</Col>

        				</Row>
        				<Row>
        				<Col sm={12}>
        				<div className = "address3">
        					<div className = "locationAddress">
				        	<h4 className = "companyName">India Headquarters</h4>
				        	<ul className = "addressList">
				        		<li className="addressListDetail">
				        			<i className="fa fa-map-marker" aria-hidden="true"></i>		
				        			<p className="addDetail">4-58-2/9, MIG 80,
									Lawsons Bay Colony, Vizag,
									AP 530 017, India
									US Callers: (248) 735-2401</p>
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
				       
        				</div>
        				</Col>
        				</Row>
        			</Col>
        		</Row>
        		<Row className = "addressrow2">
        			<Col sm = {4} className = "socialLink">
        				
        			</Col>
        			<Col sm = {8} className = "addressCol3">
        				
        			</Col>
        		</Row>
        	</div>
        	);
    }
}

export default Location;