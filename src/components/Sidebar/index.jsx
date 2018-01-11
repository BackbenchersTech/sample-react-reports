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
    }

    render() {   
        return(
            <Col className="sidebar ">
                <div className="appName">
                    <i className="fa fa-cogs fa-spin fa-fw"></i>
                    <NavLink to="/app">Reportify</NavLink>
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
                        <li className={this.state.activeIndex === 0? "menuTitle active" : "menuTitle"}>
                            <i className="fa fa-home"></i>
                            <NavLink to="/app">Home</NavLink>
                        </li>
                    </ul>
                    {/* Accordion style for reports */}
                    <Collapsible trigger="Reports" className="accordionMenu" transitionTime={400} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} triggerOpenedClassName="accordionOpen">
                        <ul className="userReports">
                            <li className="userReportTitle"><NavLink exact to="/app/report1" activeClassName="active">Todos</NavLink></li>
                            <li className="userReportTitle"><NavLink  to="/app/report2" activeClassName="active">Posts</NavLink></li>
                        </ul>
                    </Collapsible>
                    <ul className="menuSection">
                        <li className={this.state.activeIndex === 1? "menuTitle active" : "menuTitle"}>
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                            <NavLink to="/help">Help</NavLink>
                        </li>
                        <li className={this.state.activeIndex === 2? "menuTitle active" : "menuTitle"}>
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            <NavLink to="/settings">Settings</NavLink>
                        </li>
                        <li className={this.state.activeIndex === 3? "menuTitle active" : "menuTitle"}>
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}