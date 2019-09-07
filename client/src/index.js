import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history } from './history'
import { Router } from 'react-router-dom'
import { store } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();