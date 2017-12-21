import React from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from '../Sidebar';
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
                <BrowserRouter>
                    <Grid fluid>
                        <Row>
                            <Sidebar />
                            <Col className="content" md={9}>
                                <Route path="/dashboard/report1" component={ReportStyle1} />
                                <Route path="/dashboard/report2" component={ReportStyle2} />
                            </Col>
                        </Row>
                    </Grid>
                </BrowserRouter> 
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