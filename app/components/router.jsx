import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./app.jsx";
import DB from "./db.jsx";

const router = (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={DB} />
			<Route path="db" component={DB} />
		</Route>
	</Router>
);

export default router;
