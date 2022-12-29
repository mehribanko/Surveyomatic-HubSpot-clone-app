import ReactDom from'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';

//const store = configureStore(() => [], {}, applyMiddleware());

ReactDom.render(
    <App />, 
    document.querySelector('#root')
    );

 