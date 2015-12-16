/**
 * Aside.
 * 侧边栏，显示DB名称和tables列表
 */

import React from "react";
import DBLink from "./dbLink";

const layout = {
	flex: "0 1 15rem",
	display: "flex",
	flexDirection: "column"
}

const theme = {
	backgroundColor: "#343434",
	color: "#FFFFFF"
}

const style = Object.assign({}, layout, theme);

export default class Aside extends React.Component {
	render() {
		return (
			<div style={style}>
				<DBLink database="webhh" />
			</div>
		);
	}
}
