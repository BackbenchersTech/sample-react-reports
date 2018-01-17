import React from 'react';

import StatsCard from '../StatsCard';

import './style.css';

class About extends React.Component {
    render() {
        return(
            <div className="about stats">
                <div className="row">
                    <StatsCard width={3} number={225} duration={1000} text="Customers Served" />
                    <StatsCard width={3} number={272} duration={1000} text="Consultants" />
                    <StatsCard width={3} number={478} duration={1000} text="Projects Executed" />
                </div>
                <div className="row">
                    <StatsCard width={2} number={11} duration={1000} text="Years in Business" />
                    <StatsCard width={2} number={100} duration={1000} text="Satisfied Customers" />
                </div>
            </div>
        )
    }
}

export default About;