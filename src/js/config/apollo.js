import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
    uri: 'https://empress.clai.io/graphql',
    // send cookies in request header
    opts: {
        credentials: 'include'
    }
});

// set header X-Requested-With header
networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};
        }
        req.options.headers = { 'X-Requested-With': 'badun' }
        next();
    }
}]);

export default new ApolloClient({
    networkInterface,
    dataIdFromObject: (object) => {
        if (object.__typename !== null && object.id !== null) {
            return `${object.__typename}-${object.id}`;
        }
        return null;
    }
});
