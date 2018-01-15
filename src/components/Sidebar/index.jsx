import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Collapsible from 'react-collapsible';

import { logout } from '../../actions';

import './style.css';

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

    handleLogout(e) {
        e.preventDefault();
        logout().then(() => {
            e.defaultPrevented = false;
        })
    }

    render() {   
        return(
            <Col className="sidebar ">
                <div className="appName">
                    <NavLink to="/app" onClick={() => this.handleNavItemClick(0)}>
                    <i className="fa fa-cogs fa-spin"></i>
                    Reportify</NavLink>
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
                            <NavLink to="/app">
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </NavLink>
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
                            <NavLink to="/help">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span>Help</span>
                            </NavLink>
                        </li>
                        {/* <li className={this.state.activeIndex === 2? "menuTitle active" : "menuTitle"} onClick={() => this.handleNavItemClick(2)}>
                            <NavLink to="/settings">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                <span>Settings</span>
                            </NavLink>
                        </li> */}
                    </ul>
                    <ul className="menuSection hugBottom">
                        <li className="menuTitle">
                            <NavLink className="specialLink" to="/logout" onClick={(e) => this.handleLogout(e)}>
                                <i className="fa fa-power-off"></i>
                                <span>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}