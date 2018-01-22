import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

class Header extends React.Component {
    render() {
        return (
            <div className="mobileHeader">
                <div className="menuIcon" onMouseDown={this.props.handleMouseDown} >
                    <i className="fa fa-bars open"></i>
                </div>
                <div className="appName">
                    <NavLink to="/app" onClick={() => this.props.handleHeaderClick()}>
                        <img src={require("../../assets/Openlogix Icon.svg")} height="17" alt="Company Logo"/>
                        React Application
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Header;