import React, { Component } from "react";
import { containerLayout, autoGrowLayout, fixedWidthLayout } from "../utils/layout";

const headerStyle = {
	padding: "1rem",
	fontSize: "2rem",
	background: "rgba(255, 255, 255, 0.08)"
}

const iconStyle = {
	fontSize: "5rem",
	margin: "0 0.5rem 0 0"
}

const bodyStyle = {
	padding: "3rem"
}

const detailStyle = {
	padding: "1rem",
	fontSize: "0.85rem",
	background: "rgba(255, 255, 255, 0.08)"
}

const angleStyle = {
	color: "rgba(255, 255, 255, 0.28)"
}
const labelStyle = {
	color: "#f08080"
}

export default class DB extends Component {
	componentDidMount() {
		fetch("datas/db.json")
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				console.log(data);
			})
	}
	render() {
		return (
			<div>
				<div style={headerStyle}>
					<span className="ion-social-buffer" style={iconStyle}></span>
					<span>数据库属性</span>
				</div>

				<section style={bodyStyle}>
					<div style={detailStyle}>
						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> name </span>
							<span style={angleStyle}>&gt;</span>
							<span> WebHappyHack </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ name </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> oid </span>
							<span style={angleStyle}>&gt;</span>
							<span> 16389 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ oid </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> encoding </span>
							<span style={angleStyle}>&gt;</span>
							<span> utf-8 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ encoding </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> data-collate </span>
							<span style={angleStyle}>&gt;</span>
							<span> zh_cn.utf-8 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ data-collate </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> data-type </span>
							<span style={angleStyle}>&gt;</span>
							<span> zh_cn.utf-8 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ data-type </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> is-template </span>
							<span style={angleStyle}>&gt;</span>
							<span> false </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ is-template </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> is-allow-connection </span>
							<span style={angleStyle}>&gt;</span>
							<span> true </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ is-allow-connection </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> connection-limit </span>
							<span style={angleStyle}>&gt;</span>
							<span> -1 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ connection-limit </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						<div style={{ marginBottom: ".5rem" }}>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}> table-space </span>
							<span style={angleStyle}>&gt;</span>
							<span> 1663 </span>
							<span style={angleStyle}>&lt;</span>
							<span style={labelStyle}>/ table-space </span>
							<span style={angleStyle}>&gt;</span>
						</div>

						

						{/*
						<div style={{ marginBottom: ".5rem" }}>
							<span>名称</span>
							<span style={labelStyle}> WebHappyHack</span>
						</div>
						*/}

						
					</div>
				</section>
			</div>
		);
	}
}
