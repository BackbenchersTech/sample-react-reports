import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './style.css';

import Collapsible from 'react-collapsible';

export default class Sidebar extends React.Component {
    render() {   
        return(
            <Col className="sidebar ">
                <div className="appName">
                    <NavLink to="/app">React Application</NavLink>
                </div>
                <div className="userDetailsWrapper">
                    <div className="userImg">
                        <img className = "img-circle" src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="Profile User"/>
                    </div>
                    <div className="textRight">
                        <div className="wrapper">
                            <div className="userName">John Alexander</div>
                            <div className = "usertitle">Writer</div>
                        </div>
                    </div>
                </div>
                    
                <div className="menuBlock">
                    <ul className="menuSection">
                        <li className="menuTitle">
                            <i className="fa fa-home"></i>
                            <NavLink to="/app">Home</NavLink>
                        </li>
                    </ul>
                    {/* Accordion style for reports */}
                    <Collapsible trigger="Reports" className="accordionMenu" transitionTime={400} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} triggerOpenedClassName="accordionOpen">
                        <ul className="userReports">
                            <li className="userReportTitle"><NavLink to="/app/report1">Todos</NavLink></li>
                            <li className="userReportTitle"><NavLink to="/app/report2">Posts</NavLink></li>
                        </ul>
                    </Collapsible>
                    <ul className="menuSection">
                        <li className="menuTitle">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                            <NavLink to="/help">Help</NavLink>
                        </li>
                        <li className="menuTitle">
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