import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import DashHome from '../components/DashHome';
import ReportStyle1 from '../components/ReportStyle1';
import ReportStyle2 from '../components/ReportStyle2';
import { getLoggedUser } from '../actions'
import './style.css';


class PrimaryLayout extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.logged)
    }

    componentWillMount() {
        getLoggedUser();
        console.log(this.props)
    }

    layout =
     <div className="primaryLayout">

        <Sidebar />
        <Col className= "contentLayout" >
            <Switch>
                <Route path={`${this.props.match.path}`} exact component={DashHome} />
                {/* <Route path={`${match.path}/report1`} component={ReportPage} /> sublayout and further links and routing */}
                <Route path={`${this.props.match.path}/report1`} component={ReportStyle1} />
                <Route path={`${this.props.match.path}/report2`} component={ReportStyle2} />
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