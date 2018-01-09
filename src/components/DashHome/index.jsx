import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './style.css';

const DashHome = ({ history }) => (
    <div className = "pageContent">

    	<div className = "row pageSection1">
	        <div className="welcomeMsg col-sm-3 col-md-3">
	            <h3>Welcome, John Doe</h3>
	        	Select a report
	        </div>
	        <div className = "graphSection col-sm-6 col-md-6">

	        </div>
	        <div className = "piegraphSection col-sm-3 col-md-3">
	        	
	        </div>
       </div>

       <div className = "row pageSection2">
	        <div className="section2Part1 col-sm-4 col-md-4">
	        	<div className = "section2Part1Row1">
	            News
	            </div>
	            <div className = "section2Part1Row2">
	            Part2 
	            </div>
	        </div>
	        <div className = "section2Part2 col-sm-4 col-md-4">
	        	daily feed
	        </div>
	        <div className = "section2Part3 col-sm-3 col-md-3">
	        	meetings
	        </div>
       </div>


    </div>
);

export default DashHome;