/**
 * Aside.
 * 侧边栏，显示DB名称和tables列表
 */

import React from "react";
import DBLink from "./dbLink";
import ListView from "./listView.jsx";

const layout = {
	flex: "0 1 15rem",
	display: "flex",
	flexDirection: "column"
}

const listLayout = {
	flex: "1 1 auto",
	padding: "1rem 1rem 0 1rem"
}

const itemLayout = {
	padding: ".5rem 0"
}

const theme = {
	backgroundColor: "#343434",
	color: "#FFFFFF"
}

const itemFont = {
	color: "rgba(255, 255, 255, 0.54)"
}

const style = Object.assign({}, layout, theme);

export default class Aside extends React.Component {
	render() {
		return (
			<div style={style}>
				<DBLink database="WebHappyHack" />

				<div style={listLayout}>
					
					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							<span style={itemFont}>snippets</span>
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							snippetGroups
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							templates
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							templateGroups
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							blogs
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							notes
						</ListView>
					</div>

					<div style={itemLayout}>
						<ListView icon="ion-fireball">
							configs
						</ListView>
					</div>
				</div>
			</div>
		);
	}
}
