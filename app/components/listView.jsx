import React, { Component } from "react";

const layout = {
	display: "flex",	
	alignItems: "center",
	height: "100%"
}

const iconLayout = {
	flex: "0 1 2rem"
}

const contentLayout = {
	flex: "1 1 auto"
}

const iconStyle = Object.assign({}, iconLayout, layout);
const contentStyle = Object.assign({}, contentLayout, layout);

export default class ListView extends Component {
	render() {
		return (
			<div style={layout}>
				<div style={iconStyle} className={this.props.icon}></div>
				<div style={contentStyle}>{this.props.children}</div>
			</div>
		);
	}
}
