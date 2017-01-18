// @flow
import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import initStore from './store/configureStore';

// Components / Containers
import App from './containers/AppContainer';

// Let webpack create the html file in the build folder
import '../index.html';
import '../css/reset.css';
import '../css/app.css';

const store = initStore();

const history = useRouterHistory(createHashHistory)({
    queryKey: false
});


const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
