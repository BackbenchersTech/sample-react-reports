import React from 'react';

import './style.css';

import DailyFeed from '../DailyFeed';

const DashHome = ({ history }) => (

    <div className = "pageContent">

    	<div className = "row pageSection1">
	        <div className="welcomeMsg  col-md-12 col-lg-3">
	            <h3>Welcome, John Alexander</h3>
	        	<small>You have 2 Reports Notifications </small>
	        	<ul className = "reportsNotificationList">
	        		<li className = "reportsNotification">Please write a report to upload</li>
	        		<li className = "reportsNotification">Call back to Henry</li>
	        		<li className = "reportsNotification">Sign a contract and please contact me.</li>
	        	</ul>
	        </div>
	        <div className = "graphSection col-md-6 col-lg-6">
	        	<img src={require('./chart.jpg')} alt="chart" className = "graphImage"/>
	        </div>
	        <div className = "piegraphSection col-md-6 col-lg-3">
	        	<h5 className = "piegraphTitle">Progress Reports</h5>
	        	<p className= "piegraphSubtitle"> You have 2 records updated </p>
	        	<img src={require('./pieChart.png')} alt="chart" className = "pieChartImage"/>
	        	<p className= "piegraphDescription"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	        </div>
       </div>

       <div className = "row pageSection2">
	        <div className="section2Part1 col-xs-12 col-md-4">
	        	<div className = "section2Part1Row1">
	            	<h4 className = "NewsTitle">New data </h4>
	            	<hr/>
	            
	            	<div className = "NewsDetails">
		            	<h4 className = "NewsTitle1">BitCoin report new data</h4>
		            	<small className  = "NewsSubtitle">Check the price</small>
	            	</div>
	            	<div className = "NewsImage">
	            		<img src = {require('./barchart.png')} alt="barStock" className = "barchartStock" />
	            	</div>

	            </div>
	            <div className = "section2Part1Row2">
	           		<h4 className = "CommentsTitle">Comments </h4>
	           		<hr/>
	           		<p className = "Comments"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	           		<hr/>
	           		<p className = "Comments">Lorem ipsum dolor sit amet</p>
	           		<img src = {require('./bar.jpg')} alt="barStock" className = "barschartStock" /> 
	           		
	            </div>
	        </div>
	        <div className = "section2Part2 col-xs-12 col-md-4">
				<DailyFeed />
	        </div>

	        <div className = "section2Part3 col-xs-12 col-md-4">
	        	<div className = "section2Part3Meetings">
	        		<h4 className = "Meetingstitle">You have a meeting Today!!</h4>
	        		<small><i className="fa fa-map-marker"></i> Meeting is at 10:00am. Check your schedule to see detail.</small>
	           		<hr/>
	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                <i className="fa fa-file-text"></i>
                                10:00 am
                                <br/>
                                <small className="text-navy">1 hour ago</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Upload Report</strong></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                            </div>
                        </div>
	           		</div>

	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                <i className="fa fa-file-text"></i>
                                10:00 am
                                <br/>
                                <small className="text-navy">1 hour ago</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Upload Report</strong></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                            </div>
                        </div>
	           		</div>

					<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                <i className="fa fa-file-text"></i>
                                10:00 am
                                <br/>
                                <small className="text-navy">1 hour ago</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Upload Report</strong></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                            </div>
                        </div>
	           		</div>

	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                <i className="fa fa-file-text"></i>
                                10:00 am
                                <br/>
                                <small className="text-navy">1 hour ago</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Upload Report</strong></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                            </div>
                        </div>
	           		</div>


	        	</div>
	        </div>
       </div>

    </div>
);

export default DashHome;
