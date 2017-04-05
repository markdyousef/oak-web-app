// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { ApolloProvider, dataIdFromObject } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { requireAuth, requireTeam } from './utils';

// Components
import App from './containers/AppContainer';
import Anonymous from './components/App/Anonymous';
import Authenticated from './components/App/Authenticated';
import Login from './containers/LoginContainer';
import SignUp from './containers/SignUpContainer';
import Home from './pages/Home';
import CollectionDetail from './containers/CollectionDetailContainer';
import Profile from './containers/ProfileContainer';
import CardDetail from './containers/CardDetailContainer';
import Settings from './containers/SettingsContainer';
import User from './pages/User';
import Admin from './containers/AdminContainer';
import Team from './pages/Team';

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
    networkInterface,
    dataIdFromObject: (object) => {
        if (object.__typename !== null && object.id !== null) {
            return `${object.__typename}-${object.id}`;
        }
        return null;
    }
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
                    <Route component={User}>
                        <Route path="admin" component={Admin} />
                        <Route path="profile" component={Profile} />
                        <Route path="settings" component={Settings} />
                    </Route>
                    <Route component={Team} onEnter={requireTeam}>
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                        <Route path="my-profile" component={Profile} />
                        <Route path="my-settings" component={Settings} />
                        <Route path="collection/:collectionId/card(/:cardId)" component={CardDetail} />
                        <Route path="collection/:collectionId" component={CollectionDetail} />
                    </Route>
                </Route>
            </Route>
        </Router>
    </ApolloProvider>
);

render(routes, document.getElementById('app'));
