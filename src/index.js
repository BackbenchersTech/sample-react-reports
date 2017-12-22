import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Layouts
import PrimaryLayout from './layouts/PrimaryLayout'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import './index.css';

const App = props => (
    <BrowserRouter>
        <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <Route path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
