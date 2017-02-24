// @flow
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

// import initStore from './store/configureStore';

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

// Let webpack create the html file in the build folder
import '../index.html';
import '../css/reset.css';
import '../css/app.css';

// const store = initStore();
const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: 'http://empress.clai.io/graphql' })
});

const routes = (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route component={Anonymous}>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                </Route>
                <Route component={Authenticated}>
                    <IndexRoute component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/card/:cardId" component={CardDetail} />
                    <Route path="/:collectionId" component={CollectionDetail} />
                </Route>
            </Route>
        </Router>
    </ApolloProvider>
);

render(routes, document.getElementById('app'));
