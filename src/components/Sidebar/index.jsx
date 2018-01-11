import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './style.css';

import Collapsible from 'react-collapsible';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }

        this.handleNavItemClick = this.handleNavItemClick.bind(this);
        this.handleAccItemClick = this.handleAccItemClick.bind(this);
    }

    handleNavItemClick(index) {
        this.setState({
            activeIndex: index
        });
    }

    handleAccItemClick(index, e) {
        e.preventDefault();
        this.setState({
            activeIndex: index
        });
        e.defaultPrevented = false;
    }

    render() {   
        return(
            <Col className="sidebar ">
                <div className="appName">
                    <NavLink to="/app" onClick={() => this.handleNavItemClick(0)}>React Application</NavLink>
                </div>
                <div className="userDetailsWrapper">
                    <div className="userImg">
                        <img className = "img-circle" src="http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" alt="Profile User"/>
                    </div>
                    <div className="textRight">
                        <div className="wrapper">
                            <div className="userName">John Alexander</div>
                            <div className = "usertitle">Administrator</div>
                        </div>
                    </div>
                </div>
                    
                <div className="menuBlock">
                    <ul className="menuSection">
                        <li className={this.state.activeIndex === 0? "menuTitle active" : "menuTitle"} onClick={() => this.handleNavItemClick(0)}>
                            <i className="fa fa-home"></i>
                            <NavLink to="/app">Home</NavLink>
                        </li>
                    </ul>
                    {/* Accordion style for reports */}
                    <Collapsible trigger="Reports" className={this.state.activeIndex === 11? "accordionMenu active" : "accordionMenu"} transitionTime={400} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} triggerOpenedClassName="accordionOpen">
                        <ul className="userReports">
                            <li className="userReportTitle"><NavLink exact to="/app/report1" activeClassName="active" onClick={(e) => this.handleAccItemClick(11,e)}>Todos</NavLink></li>
                            <li className="userReportTitle"><NavLink  to="/app/report2" activeClassName="active" onClick={(e) => this.handleAccItemClick(11,e)}>Posts</NavLink></li>
                        </ul>
                    </Collapsible>
                    <ul className="menuSection">
                        <li className={this.state.activeIndex === 1? "menuTitle active" : "menuTitle"} onClick={() => this.handleNavItemClick(1)}>
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                            <NavLink to="/app/report1">Help</NavLink>
                        </li>
                        <li className={this.state.activeIndex === 2? "menuTitle active" : "menuTitle"} onClick={() => this.handleNavItemClick(2)}>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            <NavLink to="/settings">Settings</NavLink>
                        </li>
                        <li className="menuTitle">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}