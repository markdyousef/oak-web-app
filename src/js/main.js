import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import initStore from './redux/store';

// Components / Containers
import App from './components/App/App';
import Home from './components/Home/Home';

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
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
