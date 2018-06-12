import React from 'react';
// provider hel[s us connect react with redux
import { Provider } from 'react-redux'; 
// hash router helps us render components based on browser location (urls)
import { HashRouter } from 'react-router-dom';
import App from './app';

// purely functional component
const Root = ({store}) => (
    <Provider store={store}> 
        <HashRouter> 
            <App />
        </HashRouter>
    </Provider>
);  

export default Root;

