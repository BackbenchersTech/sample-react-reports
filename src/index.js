import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrimaryLayout from './layouts/PrimaryLayout'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import store from './store';

import './index.css';

const App = props => (
    <Provider store={store}>
        <BrowserRouter basename="/sample-react-reports">
            <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <Route path="/app" component={PrimaryLayout} />
                <Redirect to="/auth" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
