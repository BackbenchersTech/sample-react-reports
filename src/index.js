import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';
import history from './history';

import './index.css';

ReactDOM.render(
    <Routes history={history} />, document.getElementById('root')
);
registerServiceWorker();
