import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AppLink from './containers/index';
import reducers from './reducers';
import './styles/app.scss';

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

render(
    <Provider store={store}>
        <AppLink />
    </Provider>,
    document.getElementById('root'),
);
