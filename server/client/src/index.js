import ReactDom from'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
 
import App from './components/App';

const store = createStore(() => [], {}, applyMiddleware());

ReactDom.render(
    <Provider store={store}>
        <App />         
    </Provider> ,
    document.querySelector('#root')
);

 