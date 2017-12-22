import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import Sidebar from '../components/Sidebar';
import DashHome from '../components/DashHome';
import ReportStyle1 from '../components/ReportStyle1';
import ReportStyle2 from '../components/ReportStyle2';

const PrimaryLayout = ({ match }) => (
    <div className="primaryLayout">
        <Sidebar />
        <Col xs={9} md={10}>
            <Switch>
                <Route path={`${match.path}`} exact component={DashHome} />
                {/* <Route path={`${match.path}/report1`} component={ReportPage} /> sublayout and further links and routing */}
                <Route path={`${match.path}/report1`} component={ReportStyle1} />
                <Route path={`${match.path}/report2`} component={ReportStyle2} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </Col>
    </div>
);

export default PrimaryLayout;