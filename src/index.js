import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import { fetchAllImages } from './actions/index';
import App from './App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import imageDetails from './containers/imageDetails';
import {  Route, Router } from 'react-router-dom';
export const store = createStore(rootReducer, applyMiddleware(thunk));
const history = createHistory()
store.dispatch(fetchAllImages());
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact  path="/"  component={App} />
            <Route path='/image' component={imageDetails} />
        </Router>,
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
