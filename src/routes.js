import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default Routes;