import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './style.css';

const DashHome = ({ history }) => (
    <div className = "pageContent">
        <div className="welcomeMsg">
            <h3>Welcome, John Doe</h3>
        </div>
        Select a report
        {/* <Row className="reportBlocks">
            <Col xs={6} className="reportDetails">
                <h4>Report 1</h4>
            </Col>
            <Col xs={6} className="reportDetails">
                <h4>Report 2</h4>
            </Col>
        </Row> */}
    </div>
);

export default DashHome;