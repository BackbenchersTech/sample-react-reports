import React from 'react';

import './style.css';


const DashHome = ({ history }) => (

    <div className = "pageContent">

    	<div className = "row pageSection1">

	        <div className="welcomeMsg col-sm-12 col-md-6">
	            <h3>Welcome, John Appleseed</h3>
	        	<small>Services offered by us</small>
	        	<ul className = "reportsNotificationList">
	        		<li className = "reportsNotification">
	        		<a href="https://www.open-logix.com/services/application-development/" target="_blank" rel="noopener noreferrer" className="check-link"><i className="fa fa-check-square"></i> </a>
	        		<span className = "listDetail">Application Development</span></li>

	        		<li className = "reportsNotification">
	        		<a href="https://www.open-logix.com/services/application-maintenance/" target="_blank" rel="noopener noreferrer" className="check-link"><i className="fa fa-check-square"></i> </a>
	        		<span className = "listDetail">Application Maintenance</span></li>

	        		<li className = "reportsNotification">
	        		<a href="https://www.open-logix.com/services/application-testing/" target="_blank" rel="noopener noreferrer" className="check-link"><i className="fa fa-square-o"></i> </a>
	        		<span className = "listDetail">Application Testing</span></li>

	        		<li className = "reportsNotification">
	        		<a href="https://www.open-logix.com/services/application-security/" target="_blank" rel="noopener noreferrer" className="check-link"><i className="fa fa-square-o"></i> </a>
	        		<span className = "listDetail">Application Security</span></li>

	        		<li className = "reportsNotification">
	        		<a href="https://www.open-logix.com/services/staff-augmentation/" target="_blank" rel="noopener noreferrer" className="check-link"><i className="fa fa-square-o"></i> </a>
	        		<span className = "listDetail">
	        		Staff augmentation</span></li>
	        	</ul>
	        </div>

	       	<div className = "graphSection col-sm-12 col-md-6 ">
	        	<img src={require('../../assets/pie.png')} alt="chart" className = "graphImage"/>
	        </div>

       </div>

       <div className = "row pageSection2">
	        <div className="section2Part1 col-xs-12 col-md-4">
	        	<div className = "section2Part1Row1">
					<h4 className = "NewsTitle">Upcoming Events</h4>
	            	
	               <div className = "UpcomingEvents">
	            	<div className = "NewsDetails">
		            	<h5 className = "NewsTitle1"><strong>IBM conference</strong></h5>
		            	<small className  = "NewsSubtitle">
		            	Las Vegas, CA</small>
	            	</div>
	            	<div className = "NewsImage">
	            		<small className = "pull-right">03/19/2018</small>
	            	</div>
                    </div>

	            </div>
	            <div className = "section2Part1Row2">
	           		<h4 className = "CommentsTitle">Contact Us</h4>
	           		<div className = "contactWrapperDiv">
	           		<div className = "contactWrapper">
	           		<div className="userImg">
                        <img className = "img-circle" src="https://www.open-logix.com/wp-content/uploads/2013/07/jackie-adamson-174x174.jpg" alt="Profile User"/>
                    </div>
                    <div className = "textRight">
	           		<div className = "Comments"><h5 className = "contactTitle"><strong>Jackie Adamson</strong></h5>
	           		<small className = "text-muted">Sales and Marketing</small>
	           		<br/>
	           		</div>
	           		
	           		<div className = "contactDiv">
	           		<div className = "contactemail">
	           		Email:<a href="mailto:jadamson@open-logix.com">jadamson@open-logix.com</a>
	           		</div>
	           		<div className = "contactemail">
	           		Skype:<a href="skype:jackie.openlogix">jackie.openlogix</a>
	           		</div>
	           		</div>
	           		</div>
	           		</div>
	           		

	           		<hr/>
	           		<div className = "contactWrapper">
	           		<div className="userImg">
                        <img className = "img-circle" src="http://www.porticodesign.com/wp-content/uploads/2014/03/blank-person-07d1653f840307220b203ecb834f5904-400x400.png" alt="Profile User"/>
                    </div>
                    <div className = "textRight">
                    <div className = "contactInfo">
	           		<div className = "Comments"><h5 className = "contactTitle"><strong>Ranadheer Pesaru</strong></h5>
	           		<small className = "text-muted">Manager, Technical Delivery</small>
	           		<br/>
	           		</div>
	           		<div className = "contactDiv">
	           		<div className = "contactemail">
	           		Email:<a href="mailto:rapesaru@open-logix.com">rapesaru@open-logix.com</a>
	           		</div>
	           		<div className = "contactemail">
	           		Skype:<a href="skype:ranadheer.openlogix">ranadheer.openlogix</a>
	           		</div>
	           		</div>
	           		</div>
	           		</div>
                    </div>
	            </div>
	            </div>
	        </div>
	        <div className = "section2Part2 col-xs-12 col-md-4">

	         <div className = "section2Part2Feed">
	         	<div className = "dailyFeedTitle">
                <h4 className = "dailyFeed">Current Openings </h4>
                <div className = "jobPosting">
                <small className="label label-danger pull-right">
                <i className="fa fa-tags" aria-hidden="true"></i> 8 Jobs</small>
                </div>
                </div>
                <div className="dailyFeedList">

                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">01/16/2018</small>
                        <strong>ESB Engineer </strong><br/>
                        <small className="text-muted">Detroit, Michigan</small>
                    </div>
                    
                </div>
                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">01/06/2018</small>
                        <strong>Jr BI Engineer </strong> <br/>
                        <small className="text-muted">Detroi,t Michigan</small>
                    </div>
                    
                </div>
                    <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">12/23/2017</small>
                        <strong>Datapower Developer </strong><br/>
                        <small className="text-muted">Trenton, NJ</small>
                    </div>
                   
                </div>

                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">12/15/2017</small>
                        <strong> IIB Developer </strong> <br/>
                        <small className="text-muted">East Chicago,IN</small>
                    </div>
                   
                </div>

                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">12/02/2017</small>
                        <strong>Senior Java Developer</strong> <br/>
                        <small className="text-muted">Today 5:20pm - 1.10.2018</small>
                    </div>
                    
                </div>
                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">11/10/2017</small>
                        <strong>Data Modeler</strong><br/>
                        <small className="text-muted">Memphis,TN</small>
                    </div>
                    
                </div>
                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">10/26/2017</small>
                        <strong>Sr.Java Developer</strong> <br/>
                        <small className="text-muted">El Segundo, CA</small>
                    </div>
                    
                </div>
                <div className = "dailyfeedListItem">
                   <div className = "dailyfeedListDetail">
                        <small className="pull-right">09/15/2017</small>
                        <strong>Desktop Engineer</strong> <br/>
                        <small className="text-muted">Detroit,Michigan</small>
                    </div>
                    
                </div>

                </div>
                </div>


	        </div>

	        <div className = "section2Part3 col-xs-12 col-md-4">
	        	<div className = "section2Part3Meetings">
	        	<div className = "meetingsTitleDiv">
	        		<h4 className = "Meetingstitle">Events till date!!</h4>
	        		{/*<small><i className="fa fa-map-marker"></i> Meeting is at 10:00am. Check your schedule to see detail.</small>*/}
	           		
	           		</div>
	           		<div className = "eventsDiv">
	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                                Feb 19,2017
                                <br/>
                                <small className="text-navy">San Francisco</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>IBM Connect conference</strong></p>
                                <small>IBMGO is the free virtual experience for IBM Global Conferences–available anytime, anywhere, on any device. Watch live and on demand broadcasts of the General session & Keynote now.</small>
                            </div>
                        </div>
	           		</div>

	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                               Mar 8,2017
                                <br/>
                                <small className="text-navy">San Francisco</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Google NEXT</strong></p>
                                <small>Get new ideas. Learn from industry experts. Engage with peers. Join us for an immersive event that brings together executives, customers, partners, developers, IT decision makers, and Google Engineers to build the future of the cloud.</small>
                            </div>
                        </div>
	           		</div>

					<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                               
                                Mar 19,2017
                                <br/>
                                <small className="text-navy">Las Vegas</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>IBM Interconnect</strong></p>
                                <small>Cloud. Internet of Things. Watson.How can you use the world’s biggest breakthroughs to unleash ingenuity?</small>
                            </div>
                        </div>
	           		</div>

	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                                Mar 20,2017
                                <br/>
                                <small className="text-navy">Las Vegas</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>IBM Amplify</strong></p>
                                <small>We are excited to invite you to Amplify 2017 this March 20-22 in Las Vegas. From sharing best practices to learning the latest from IBM and industry experts, Amplify 2017 will help attendees elevate the customer experience at every stage of their journey.</small>
                            </div>
                        </div>
	           		</div>
	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                                May 6,2017
                                <br/>
                                <small className="text-navy">Orlando</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>SAP Sapphire now+ASUG</strong></p>
                                <small>Watch the video and get a sneak peek of what to expect at this year’s SAPPHIRE NOW and ASUG Annual Conference.</small>
                            </div>
                        </div>
	           		</div>	          
	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                                Oct 29,2017
                                <br/>
                                <small className="text-navy">Las Vegas</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>IBM World of Watson 2017</strong></p>
                                <small>Everything you loved–or missed–at World of Watson is now available on demand at IBMGO. View broadcasts of 24+ sessions, 26+ exclusive interviews and IBM CEO Ginni Rometty’s keynote.</small>
                            </div>
                        </div>
	           		</div>
	           		<div className = "meetingDetails">
	           			<div className="row meetingDetailsRow">
                            <div className="col-xs-3 date">
                                
                                Nov 6,2017
                                <br/>
                                <small className="text-navy">San Francisco</small>
                            </div>
                            <div className="col-xs-7 meetingContent">
                                <p className="meetingDetailHeading"><strong>Salesforce DreamForce</strong></p>
                                <small>Be a Customer Trailblazer with Marc Benioff & Special Guests</small>
                            </div>
                        </div>
	           		</div>

	           		</div>
	        	</div>
	        </div>
       </div>

    </div>
);

export default DashHome;
