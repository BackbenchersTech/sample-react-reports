import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import DashHome from '../components/DashHome';
import About from '../components/About';
import ReportStyle1 from '../components/ReportStyle1';
import ReportStyle2 from '../components/ReportStyle2';
import Header from '../components/Header';
import Overlay from '../components/Overlay';

import { getLoggedUser } from '../actions/loginActions'
import './style.css';


class PrimaryLayout extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            visible: false,
            activeIndex: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleNavItemClick = this.handleNavItemClick.bind(this);
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.handleAccItemClick = this.handleAccItemClick.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if(window.innerWidth > 768) {
            this.setState({
                visible: true
            });
        }
        else {
            this.setState({
                visible: false
            });
        }
    }

    componentWillMount() {
        getLoggedUser();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleMouseDown(e) {
        this.toggleMenu();
        // e.stopPropagation();
    }

    handleNavItemClick(index) {
        this.setState({
            activeIndex: index
        });
        if(window.innerWidth < 768) {
            this.handleMouseDown();
        }
    }

    handleAccItemClick(index, e) {
        e.preventDefault();
        this.setState({
            activeIndex: index
        });
        e.defaultPrevented = false;
        if(window.innerWidth < 768) {
            this.handleMouseDown();
        }
    }

    handleHeaderClick() {
        this.setState({
            activeIndex: 0
        })
    }
    
    render() {
        const layout =
        <div className="primaryLayout">
            <Sidebar handleNavItemClick={this.handleNavItemClick} handleAccItemClick={this.handleAccItemClick} activeIndex={this.state.activeIndex} menuVisibility={this.state.visible} />
            <Overlay visibility={this.state.visible} />
            <Col className= "contentLayout" >
                <Header handleMouseDown={this.handleMouseDown} handleHeaderClick={this.handleHeaderClick} />
                <Switch>
                    <Route path={`${this.props.match.path}`} exact component={DashHome} />
                    <Route path={`${this.props.match.path}/about`} component={About} />
                    {/* <Route path={`${match.path}/report1`} component={ReportPage} /> sublayout and further links and routing */}
                    <Route path={`${this.props.match.path}/report1`} component={ReportStyle1} />
                    <Route path={`${this.props.match.path}/report2`} component={ReportStyle2} />
                    <Redirect to={`${this.props.match.url}`} />
                </Switch>
            </Col>
        </div>
        return (
            this.props.logged ? layout : <Redirect to="/auth/login" />
        )
    }
}

const stateToProps = ({ loggedUserState }) => ({
    pending: loggedUserState.pending,
    logged: loggedUserState.logged
})

export default connect(stateToProps)(PrimaryLayout);