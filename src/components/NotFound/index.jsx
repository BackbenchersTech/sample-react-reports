import React from 'react'; 

import logo from './logo.svg';
import './style.css';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <header className="notFound-header">
                    <img src={logo} className="notFound-logo" alt="logo" />
                    <h1 className="notFound-title">Welcome to React</h1>
                </header>
                <p className="notFound-intro">
                To get started, go to <code>/login</code> and follow the flow.
                </p>
            </div>
        );
    }
}