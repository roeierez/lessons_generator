import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

const __PRODUCTION__ = (process.env.NODE_ENV === 'production'); // eslint-disable-line

const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === 'development',
});

const middlewares = [
    !__PRODUCTION__ && logger,
].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(
    ...middlewares,
)(createStore);

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../', () => {
            const nextRootReducer = require('./rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
