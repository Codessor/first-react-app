import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

function App() {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				className: "App-logo",
				src: logo,
				alt: "logo",
			}),
			createElement(
				"p",
				null,
				"Edit",
				createElement("code", "src/App.js"),
				" and save to reload."
			),
			createElement(
				"a",
				{
					clasName: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", null, new Date().getFullYear())
		)
	);
}

export default App;
