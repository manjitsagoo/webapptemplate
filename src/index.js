import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Router } from 'react-router-dom'
import history from './containers/history'
import Root from './containers/root';
import AdminAppState from './reducers';

const store = createStore(
    AdminAppState,
    window.INITIAL_STATE
);

ReactDOM.render(
    <Router history={history}>
        <Root store={store} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
