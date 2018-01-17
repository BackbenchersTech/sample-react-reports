import React from 'react';
import  {Row ,Col } from 'react-bootstrap';
import './style.css';

class Location1 extends React.Component {

	render() {
        return ( 
        	<div>
			  <Row className = "addressRow1">
			    <Col sm={8} className = "addressCol1">
			    <Row>	    	
			    	<div className = "address">
			      		<div className = "locationImage ">
				        </div>
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
			      	</div>
			      	</Row>

			      	<Row>
			      	<div className = "address">
			      		<div className = "locationImage ">
				        	<img src={require('./beck.jpg')} alt="chart" className = "dallasimage"/>
				        </div>
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
			      	</div>
			      	</Row>
			    </Col>

			    <Col sm={4} className = "addressCol2">
			    	<Row>
			      <div className = "address">
			      		<div className = "locationImage ">
				        	<img src={require('./beck.jpg')} alt="chart" className = "vizagimage"/>
				        </div>
				        </div>
				        </Row>

				        <Row>
				        <div className = "address">
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
			      	
			      	</Row>
			    </Col>
			  </Row>
			  <Row className = "addressRow2">
			  	<Col sm={4} className = "socialLinks">
			  		<div className = "address">
			  		<div className=" blogSocialLink">
						<a className="twitter" 
						href="https://twitter.com" target="_blank"  rel="noopener noreferrer" title="Tweet" >
						<i className="fa fa-twitter" aria-hidden="true"></i>
						</a>
						<a className="linkedin" 
						href="http://www.linkedin.com" target="_blank"  rel="noopener noreferrer">
						<i className="fa fa-linkedin" aria-hidden="true"></i>
						</a>
						<a className="facebook" href="https://www.facebook.com" target="_blank"  rel="noopener noreferrer" >
						<i className="fa fa-facebook" aria-hidden="true"></i>
						</a>
					</div>
			      	</div>
			  	</Col>
			  	<Col sm={8} className = "addressCol3">
			  		<Row>
			    	<div className = "address">
			      		<div className = "locationImage ">
				        	<img src={require('./beck.jpg')} alt="chart" className = "bangimage"/>
				        </div>
				        <div className = "locationAddress">
				        	<h4 className = "companyName">Bangalore Development Center</h4>
				        	<ul className = "addressList">
				        		<li className="addressListDetail">
				        			<i className="fa fa-map-marker" aria-hidden="true"></i>		
				        			<p className="addDetail">#280, 2nd Floor, 5th Main,
									6th Sector, HSR Layout,
									Bangalore, Karnataka 560034
									India</p>
				        		</li>
				        		<li className="addressListDetail">
				        			<i className="fa fa-phone" aria-hidden="true"></i>
				        			<p className="addDetail">(248) 735-2401</p>
				        		</li>
				        		<li className="addressListDetail">
				        			<i className="fa fa-envelope" aria-hidden="true"></i>
				        			<p className="addDetail">bangalore@open-logix.com</p>
				        		</li>
				        	</ul>
				       	</div>
			      	</div>
			      	</Row>
			  	</Col>
			  </Row>
			</div>
        	);
    }
}

export default Location1;