import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { signOut } from '../utils';

const networkInterface = createNetworkInterface({
    uri: 'https://empress.clai.io/graphql',
    // send cookies in request header
    opts: {
        credentials: 'include'
    }
});

const checkAuth = (response) => {
    console.log(response);
    // has to be cloned to not interrupt applyAfterware
    response.clone().json()
        .then((res) => {
            if (res.errors && res.errors.length > 0) {
                const errors = res.errors;
                const unauthorized = errors.findIndex(error => error.message === 'UNAUTHORIZED') > -1;
                if (unauthorized) {
                    console.log('doom');
                    signOut();
                }
            }
            console.log('valid');
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
