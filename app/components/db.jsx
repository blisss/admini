import React, { Component } from "react";
import { containerLayout, autoGrowLayout, fixedWidthLayout } from "../utils/layout";

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
				<div>
					<span>名称</span>
					<span>webcc</span>
				</div>

				<div>
					<span>OID</span>
					<span>16389</span>
				</div>

				<div>
					<span>字符编码</span>
					<span>UTF-8</span>
				</div>

				<div>
					<span>字符排序</span>
					<span>zh_CN.UTF-8</span>
				</div>

				<div>
					<span>字符分类</span>
					<span>zh_CN.UTF-8</span>
				</div>

				<div>
					<span>是否为系统数据库</span>
					<span>false</span>
				</div>

				<div>
					<span>是否允许连接</span>
					<span>true</span>
				</div>

				<div>
					<span>连接数限制</span>
					<span>-1</span>
				</div>

				<div>
					<span>表空间</span>
					<span>1663</span>
				</div>
			</div>
		);
	}
}
