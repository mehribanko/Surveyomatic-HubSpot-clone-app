import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';


import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducers, {}, applyMiddleware());

root.render(
    <Provider store={store}>
        <App />         
    </Provider> 
);

 