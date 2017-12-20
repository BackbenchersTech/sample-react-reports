import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </Router>
);

export default Routes;