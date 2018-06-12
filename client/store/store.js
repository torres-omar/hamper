import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

/*
createStore is a method in the redux library. It takes 3 arguments: 
=>  reducer (required)
=>  preloadedState (optional)
=>  enhancer (optional)
*/


/*
In redux, middleware refers to an enhancer passed to the store as the 
optional enhancer argument.
When a dispatch is made, the middleware intercepts the action before it
reaches the reducer.
For this app, I use middleware for console logging information about the store
during development and for making asynchronous API requests.
*/


/*
Methods available to store object:
=> getState() - Returns the store's current state.
=> dispatch(action) - Passes an action into the store's reducer telling it what information to update.
=> subscribe(callback) - Registers callbacks to be triggered whenever the store updates. 
Returns a function, which when invoked, unsubscribes the callback function from the store.
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