import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

/*
    we need redux-thunk to allow use to write action creators 
    that return a function rather than an action. 
    As a middleware, it intercepts all action creators that are functions. 
    This allows us to delay the dispatch of a given action 
*/
const middlewares = [thunk];


if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

// applyMiddleware takes in multiple arguments, we can pass in more than 1 middleware
const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
)


export default configureStore;