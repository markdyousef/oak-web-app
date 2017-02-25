// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { requireAuth } from './utils';

// Components
import App from './containers/AppContainer';
import Anonymous from './components/App/Anonymous';
import Authenticated from './components/App/Authenticated';
import Login from './containers/LoginContainer';
import SignUp from './containers/SignUpContainer';
import Home from './pages/Home';
import CollectionDetail from './containers/CollectionDetailContainer';
import Profile from './pages/Profile';
import CardDetail from './components/CardDetail';
import Settings from './containers/SettingsContainer';

// Let webpack create the html file in the build folder
import '../index.html';
import '../css/reset.css';
import '../css/app.css';

const networkInterface = createNetworkInterface({ uri: 'http://empress.clai.io/graphql' });

// set header with token from localStorage
networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};
        }
        const token = localStorage.getItem('authToken');
        req.options.headers.authorization = token ? `${token}` : null;
        next();
    }
}]);

const client = new ApolloClient({
    networkInterface
});

const routes = (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route component={Anonymous}>
                    <Route path="login" component={Login} />
                    <Route path="signup" component={SignUp} />
                </Route>
                <Route component={Authenticated} onEnter={requireAuth}>
                    <IndexRoute component={Home} />
                    <Route path="home" component={Home} />
                    <Route path="profile" component={Profile} />
                    <Route path="settings" component={Settings} />
                    <Route path="collection/:collectionId/card(/:cardId)" component={CardDetail} />
                    <Route path="collection/:collectionId" component={CollectionDetail} />
                </Route>
            </Route>
        </Router>
    </ApolloProvider>
);

render(routes, document.getElementById('app'));
