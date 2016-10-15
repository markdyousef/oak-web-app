import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk);

const isDev = process.env.NODE_ENV !== 'production';

let enhancer;

if (isDev) {
    enhancer = compose(
        middleware,
        //  eslint-disable-next-line arrow-body-style
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
} else {
    enhancer = compose(middleware);
}

export default () => {
    const store = createStore(reducers, {}, enhancer);

    if (isDev && module.hot) {
        module.hot.accept('../reducers', () => {
            // eslint-disable-next-line global-require
            store.replaceReducer(require('../reducers'));
        });
    }

    return store;
};
