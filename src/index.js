//Author-Tejasvi Raj Pant

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './Store/store';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
    <Route exact path={process.env.PUBLIC_URL + "/"} component = {App}>

    </Route>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
