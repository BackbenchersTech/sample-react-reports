import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class Sidebar extends React.Component {
    render() {
        return(
            <Col className="sidebar" xs={3} md={2}>
                <div className="userWrapper">
                    <div className="profilePic"><img src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="Profile Picture" /></div>
                    <div className="details">
                        <p className="name">John Doe</p>
                    </div>
                </div>
                <div className="reportsBlock">
                    <ul className="reports">
                        <li className="reportTitle">
                            <NavLink to="/dashboard/report1">Report 1</NavLink>
                        </li>
                        <li className="reportTitle">
                            <NavLink to="/dashboard/report2">Report 2</NavLink>
                        </li>
                        <li className="reportTitle">
                            <NavLink to="/report3">Report 3</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <ul className="footerLinks">
                        <li>
                            <NavLink to="/help">Help</NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings">Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}