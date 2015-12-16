import { render } from "react-dom";
import router from "./components/router.jsx";

const mountNode = document.getElementById("app");

render(router, mountNode);
