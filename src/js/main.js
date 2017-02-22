// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import initStore from './store/configureStore';

// Components
import App from './containers/AppContainer';
import Anonymous from './components/App/Anonymous';
import Authenticated from './components/App/Authenticated';
import Login from './components/Login';
import SignUp from './containers/SignUpContainer';
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
                <Route component={Anonymous}>
                    <IndexRoute component={Login} />
                </Route>
                <Route component={Authenticated}>
                    <IndexRoute component={Home} />
                    <Route path="/:collectionId" component={CollectionDetail} />
                </Route>
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
