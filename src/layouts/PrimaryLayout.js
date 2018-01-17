import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import DashHome from '../components/DashHome';
import About from '../components/About';
import ReportStyle1 from '../components/ReportStyle1';
import ReportStyle2 from '../components/ReportStyle2';
import Location from '../components/Location';
import { getLoggedUser } from '../actions'

import './style.css';


class PrimaryLayout extends React.Component {
    componentWillMount() {
        getLoggedUser();
    }

    layout =
     <div className="primaryLayout">

        <Sidebar />
        <Col className= "contentLayout" >
            <Switch>
                <Route path={`${this.props.match.path}`} exact component={DashHome} />
                <Route path={`${this.props.match.path}/about`} component={About} />
                {/* <Route path={`${match.path}/report1`} component={ReportPage} /> sublayout and further links and routing */}
                <Route path={`${this.props.match.path}/report1`} component={ReportStyle1} />
                <Route path={`${this.props.match.path}/report2`} component={ReportStyle2} />
                <Route path={`${this.props.match.path}/location`} component={Location} />
                <Redirect to={`${this.props.match.url}`} />
            </Switch>
        </Col>
    </div>

    render() {
        return (
            this.props.logged ? this.layout : <Redirect to="/auth/login" />
        )
    }
}

const stateToProps = ({ loggedUserState }) => ({
    pending: loggedUserState.pending,
    logged: loggedUserState.logged
})

export default connect(stateToProps)(PrimaryLayout);