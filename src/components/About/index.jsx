import React from 'react';

import StatsCard from '../StatsCard';
import Location from '../Location';

import './style.css';

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="aboutContent">
                    <h2 className="title">About</h2>
                    <p>We are passionate about providing business and technology services to clients and helping them innovate and improve efficiencies by technology-enabling them.</p>
                    <p>At OpenLogix, we have an awesome team of technology and business professionals that make things happen. We strive to provide a great experience for our customers, employees, and partners.</p>
                </div>
                <div className="stats">
                    <div className="row">
                        <StatsCard width={3} number={225} duration={1000} text="Customers Served" bgcolor="ffffff" color="333" />
                        {/* bgcolor="ff5252" */}
                        <StatsCard width={3} number={272} duration={1000} text="Consultants" bgcolor="ffffff" color="333" />
                        {/* bgcolor="7c4dff" */}
                        <StatsCard width={3} number={478} duration={1000} text="Projects Executed" bgcolor="ffffff" color="333" />
                        {/* bgcolor="1bc98e" */}
                    </div>
                    <div className="row">
                        <StatsCard width={2} number={11} duration={1000} text="Years in Business" bgcolor="ffffff" color="333" />
                        {/* bgcolor="448aff" */}
                        <StatsCard width={2} number={100} duration={1000} text="Satisfied Customers" bgcolor="ffffff" color="333" suffix="%" />
                        {/* bgcolor="00bcd4" */}
                    </div>
                </div>
                <div className="history">
                    <h2 className="title">company history</h2>
                    <ul>
                        <li>
                            <div className="year">2006</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">started with just two of us</h4>
                                <p>We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing in the IBM space. We focused primarily on IBM Middleware solutions. The bet paid off. </p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2007</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">offshore operations started</h4>
                                <p>To be very competitive in the market place, we wanted to offer some basic offshore services for our customers. We also establishes a back-office operations center in India. We added 4 new employees in India to take care of some of the back office operations and also to develop some in-house applications to support our day-to-day operations.</p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2008</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">25th employee</h4>
                                <p>Within less than 2 years we made significant progress. We achieved IBM Premier Partner level by getting as many of our IBM consultants certified as we can. Reached 25 employees mark. Customers are getting the word that we provide the right skills for the IBM middleware, portal and commerce skills. We signed up some prominent Fortune 500 clients within the 1st year. </p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2011</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">crosses 100 employee mark</h4>
                                <p>Our journey has only brought us higher. Information Technology completely changes the way we analyze and present data. We have embraced new technologies and have ensured that our clients receive cutting edge analytics. As we go on towards the future we intend to exploit the full potential of new technologies to power our services.</p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2013</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">vizag - offshore development center opened.</h4>
                                <p>Customers are demanding solutions faster and yet wanted to get things done at lesser cost. We have opened a 250 seat offshore development center in Vizag. Vizag is a tier-2 city in the state of Andhra Pradesh, a beach town and also our founder's home town. With it's vibrant cosmopolitan culture, it has provided us with the right mix of resources. </p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2015</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">bangalore - offshore delivery center opened.</h4>
                                <p>Bangalore (Bengaluru) with it's vast resource pool was our next destination for offshore delivery. Especially, this became our delivery center that focused primarily on delivering enterprise mobile solutions and also IBM-centric solutions. IBM skills have been easier to source in Bangalore compared to other cities in India. </p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2017</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">10th Anniversary Year - New Partnerships</h4>
                                <p>We are currently celebrating our 10th anniversary of Openlogix. Going into the 11th year, we have partnered with new Cloud Partners like Amazon Web Services (AWS), Google Cloud Platform (GCP) and Microsoft Azure. This has really helped us grow our Cloud Practice.</p>
                            </div>
                        </li>
                        <li>
                            <div className="year">2018</div>
                            <div className="sep"></div>
                            <div className="company_history_text">
                                <h4 className="no_stripe">journey continues</h4>
                            </div>
                        </li>
                    </ul>                
                </div>
                <div className="locations">
                    <h2 className="title">Locations</h2>
                    <Location />
                </div>
            </div>
        )
    }
}

export default About;