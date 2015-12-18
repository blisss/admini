import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import App from "./app.jsx";
import DB from "./db.jsx";


const reducer = combineReducers(Object.assign({}, {
	routing: routeReducer
}))

const store = createStore(reducer);

console.log(store.getState());

const history = createBrowserHistory();

syncReduxAndRouter(history, store);

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={DB} />
				<Route path="db" component={DB} />
			</Route>
		</Router>
	</Provider>
);

export default router;
