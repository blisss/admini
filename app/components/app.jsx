/**
 * App.
 */

import React, { Component } from "react";
import { containerLayout, autoGrowLayout } from "../utils/layout";
import { background, foreground } from "../utils/theme";
import Aside from "./aside";

const containerStyle = Object.assign({}, containerLayout(), background(), foreground(0.87));

export default class App extends Component {
	render() {
		return (
			<section style={containerStyle}>
				<Aside />
				<main style={autoGrowLayout()}>
					{this.props.children}
				</main>
			</section>
		);
	}
}
