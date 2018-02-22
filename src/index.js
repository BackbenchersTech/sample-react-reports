import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthorizedRoute from './AuthorizedRoute';

import PrimaryLayout from './layouts/PrimaryLayout'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'

import store from './store';
import './index.css';
import { getLoggedUser } from './actions/loginActions';

if(localStorage.getItem('token')) {
    store.dispatch(getLoggedUser(localStorage.getItem('token')))
}

const App = props => (
    <Provider store={store}>
        <BrowserRouter basename="/sample-react-reports">
            <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <AuthorizedRoute path="/app" component={PrimaryLayout} />
                <Redirect to="/auth" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
