import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
/*
Entry file 
*/
document.addEventListener('DOMContentLoaded', () => {
    let store;
    /* 
     * currentUser is a global variable that is set in the backend 
     * if there is a current_user (method that returns a current user)  
     */
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
