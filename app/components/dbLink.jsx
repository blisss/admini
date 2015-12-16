/**
 * DB.
 * 数据库名称，点击跳转`/db`
 */

import React, { Component } from "react";
import { fixedWidthLayout } from "../utils/layout";
import { Link } from "react-router";
import ListView from "./listView.jsx";

const layout = {
	padding: ".5rem 1rem"
}

const theme = {
	backgroundColor: "#222222",
	color: "#FFFFFF"
}

const style = Object.assign({}, fixedWidthLayout("2rem"), layout, theme);

export default class DBLink extends Component {
	render() {
		return (
			<div style={style}>
				<ListView icon="ion-social-buffer">
					<Link to="/db">{this.props.database}</Link>
				</ListView>
			</div>
		);
	}
}
