import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory, Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';

import initStore from './redux/store';
const store = initStore();

// Components / Containers
import App from './components/App/App';
import { Category, CategorySidebar, Item } from './components/Other/Other';

// Let webpack create the html file in the build folder
import '../index.html';

const history = useRouterHistory(createHashHistory)({
    queryKey: false
});


const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
                    <Route path=":item" component={Item} />
                </Route>
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
