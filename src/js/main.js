// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import initStore from './store/configureStore';

// Components
import App from './containers/AppContainer';
import Home from './pages/Home';
import CollectionDetail from './containers/CollectionDetailContainer';

// Let webpack create the html file in the build folder
import '../index.html';
import '../css/reset.css';
import '../css/app.css';

const store = initStore();

const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/:collectionId" component={CollectionDetail} />
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
