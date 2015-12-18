const bgColor = "222222";
const fgColor = "FFFFFF";

function mankColor(color, opacity) {
		return `rgba(${color}, ${opacity})`;
}

function background(opacity = 1) {
		return {
				backgroundColor: mankColor("24, 24, 24", opacity)
		};
}

function foreground(opacity = 1) {
		return {
				color: mankColor("255, 255, 255", opacity)
		};
}

export {
		bgColor,
		fgColor,
		background,
		foreground
};
