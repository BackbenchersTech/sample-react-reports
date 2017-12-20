import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import history from '../../history';
import ReportStyle1 from '../ReportStyle1';
import ReportStyle2 from '../ReportStyle2';

import './style.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        };
    }

    render() {
        if (this.state.isLoggedIn) {
            return ( 
                <HashRouter>
                    <Grid fluid>
                        <Row>
                            <Col className="sidebar" md={3}>
                                <div className="userWrapper">
                                    <div className="profPic"><img src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="Profile User"/></div>
                                    <div className="details">
                                        <p className="name">John Doe</p>
                                    </div>
                                </div>
                                <div className="reportsBlock">
                                    <ul className="reports">
                                        <li className="reportTitle"><NavLink to="/report1">Report 1</NavLink></li>
                                        <li className="reportTitle"><NavLink to="/report2">Report 2</NavLink></li>
                                        {/* <li className="reportTitle">Report 3</li>
                                        <li className="reportTitle">Report 4</li>
                                        <li className="reportTitle">Report 5</li> */}
                                    </ul>
                                </div>
                            </Col>
                            <Col className="content" md={9}>
                                <Route path="/report1" component={ReportStyle1} />
                                <Route path="/report2" component={ReportStyle2} />
                            </Col>
                        </Row>
                    </Grid>
                </HashRouter> 
            );
        }
        else {
            return (
                <h2> Login </h2>
            );
        }
    }
}

export default Dashboard;