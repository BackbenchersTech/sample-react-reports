import React from 'react';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import { logout } from '../../actions';

import './style.css';

export default class Sidebar extends React.Component {
    handleLogout(e) {
        e.preventDefault();
        logout().then(() => {
            e.defaultPrevented = false;
        });
    }

    render() {
        var visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show"
        }
        
        return(
            <div className={"sidebar " + visibility } >
                <div className="appName">
                    <NavLink to="/app" onClick={() => this.props.handleNavItemClick(0)}>
                    <img src={require("../../assets/Openlogix Icon.svg")} height="20" alt="Company Logo"/>React Application</NavLink>
                </div>
                <div className="userDetailsWrapper">
                    <div className="userImg">
                        <img className = "img-circle" src="http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg" alt="Profile User"/>
                    </div>
                    <div className="textRight">
                        <div className="wrapper">
                            <div className="userName">John Appleseed</div>
                            <div className = "usertitle">Administrator</div>
                        </div>
                    </div>
                </div>
                    
                <div className="menuBlock">
                    <ul className="menuSection">
                        <li className={this.props.activeIndex === 0? "menuTitle active" : "menuTitle"} onClick={() => this.props.handleNavItemClick(0)}>
                            <NavLink to="/app">
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className={this.props.activeIndex === 1? "menuTitle active" : "menuTitle"} onClick={() => this.props.handleNavItemClick(1)}>
                            <NavLink to="/app/about">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span>About</span>
                            </NavLink>
                        </li>
                    </ul>
                    {/* Accordion style for reports */}
                    <Collapsible trigger="Reports" className={this.props.activeIndex === 11? "accordionMenu active" : "accordionMenu"} transitionTime={400} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} triggerOpenedClassName="accordionOpen">
                        <ul className="userReports">
                            <li className="userReportTitle"><NavLink exact to="/app/report1" activeClassName="active" onClick={(e) => this.props.handleAccItemClick(11,e)}>Todos</NavLink></li>
                            <li className="userReportTitle"><NavLink  to="/app/report2" activeClassName="active" onClick={(e) => this.props.handleAccItemClick(11,e)}>Posts</NavLink></li>
                        </ul>
                    </Collapsible>
                    {/* <ul className="menuSection">
                        <li className={this.props.activeIndex === 2? "menuTitle active" : "menuTitle"} onClick={() => this.props.handleNavItemClick(2)}>
                            <NavLink to="/help">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span>Help</span>
                            </NavLink>
                        </li>
                       
                        <li className={this.props.activeIndex === 2? "menuTitle active" : "menuTitle"} onClick={() => this.props.handleNavItemClick(2)}>
                            <NavLink to="/settings">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                <span>Settings</span>
                            </NavLink>
                        </li>
                    </ul> */}
                    <ul className="menuSection hugBottom">
                        <li className="menuTitle">
                            <NavLink className="specialLink" to="/logout" onClick={(e) => this.props.handleLogout(e)}>
                                <i className="fa fa-power-off"></i>
                                <span>Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}