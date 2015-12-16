/**
 * App.
 */

import React, { Component } from "react";
import { containerLayout, autoGrowLayout } from "../utils/layout";
import Aside from "./aside";

export default class App extends Component {
	render() {
		return (
			<section style={containerLayout()}>
				<Aside />
				<main style={autoGrowLayout()}>
					{this.props.children}
				</main>
			</section>
		);
	}
}
