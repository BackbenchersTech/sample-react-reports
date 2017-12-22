import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const PrimaryLayout = ({ match }) => (
    <div className="primaryLayout">
        <Sidebar />
    </div>
);

export default PrimaryLayout;