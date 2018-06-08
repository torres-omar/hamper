import React from 'react';
import ReactDOM from 'react-dom';

/*
Entry file 
*/

/*
Rendering components in the browser: 
=> We need to wait until the DOM is fully loaded. 
=> then we use ReactDOM.render() to replace entire content of 
target HTML element
*/

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Hello</h1>, root);
});
