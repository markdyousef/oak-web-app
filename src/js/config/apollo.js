// @flow
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { signOut, getToken } from '../utils';
import client from '../config/apollo';

// Change url depending on environment
const { NODE_ENV } = process.env;
// TODO: change to provided url
let URL = 'https://empress.clai.io:1337/graphql';
if (NODE_ENV === 'production') {
    URL = 'https://empress.clai.io/graphql';
}


const networkInterface = createNetworkInterface({
    uri: URL,
    // send cookies in request header
    opts: {
        credentials: 'include'
    }
});

const checkAuth = (response) => {
    // has to be cloned to not interrupt applyAfterware
    response.clone().json()
        .then((res) => {
            if (res.errors && res.errors.length > 0) {
                const errors = res.errors;
                const unauthorized = errors.findIndex(error => error.message === 'UNAUTHORIZED') > -1;
                const token = getToken();
                if (unauthorized && token) {
                    // signOut();
                    localStorage.clear();
                    // location.reload();
                    client.resetStore();
                    // document.cookie.split(";")
                    //     .forEach(function(c) {
                    //         document.cookie =
                    //             c.replace(/^ +/, "")
                    //             .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                }
            }
            // console.log('valid');
        })
        .catch(err => console.log(err));
};

// set header X-Requested-With header
networkInterface
    .use([{
        applyMiddleware(req, next) {
            if (!req.options.headers) {
                req.options.headers = {};
            }
            req.options.headers = { 'X-Requested-With': 'badun' };
            next();
        }
    }])
    // http://dev.apollodata.com/core/network.html
    .useAfter([{
        applyAfterware({ response }, next) {
            checkAuth(response)
            next();
        }
    }]);

// logout when cookie has expired

export default new ApolloClient({
    networkInterface,
    dataIdFromObject: (object) => {
        if (object.__typename !== null && object.id !== null) {
            return `${object.__typename}-${object.id}`;
        }
        return null;
    }
});
