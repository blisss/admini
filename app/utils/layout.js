function flex() {
		return {
				display: "flex"
		};
}

function containerLayout() {
		return Object.assign({}, flex(), fullHeight());
}

function centerLayout() {
		return Object.assign({}, flex(), {
				alignItems: "center"
		});
}
function autoGrowLayout() {
		return {
				flex: "1 1 auto"
		};
}

function fixedWidthLayout(width) {
		return  { flex: `0 1 ${width}` };
}

function fullHeight() {
		return {
				height: "100%"
		};
}

export {
		flex,
		containerLayout,
		centerLayout,
		autoGrowLayout,
		fixedWidthLayout,
		fullHeight
};
