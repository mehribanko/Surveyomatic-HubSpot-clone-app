import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import './index.css';

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
    <Provider store={store}>
        <App />         
    </Provider> 
);

 