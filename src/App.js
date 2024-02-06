import logo from "./logo.svg";
import "./App.css";

function App() {
	const appDiv = document.createElement("div");
	appDiv.className = "App";

	const appHeader = document.createElement("header");
	appHeader.className = "App-header";

	const appHeaderImg = document.createElement("img");
	appHeaderImg.src = logo;
	appHeaderImg.className = "App-logo";
	appHeaderImg.alt = "logo";

	const appHeaderP = document.createElement("p");
	appHeaderP.innerHTML = "Edit <code>src/App.js</code> and save to reload.";

	const appHeaderLink = document.createElement("a");
	appHeaderLink.clasName = "App-link";
	appHeaderLink.href = "https://reactjs.org";
	appHeaderLink.target = "_blank";
	appHeaderLink.rel = "noopener noreferrer";
	appHeaderLink.textContent = "Learn React";

	const appHeaderDate = document.createElement("p");
	appHeaderDate.textContent = new Date().getFullYear();

	appHeader.append(appHeaderImg);
	appHeader.append(appHeaderP);
	appHeader.append(appHeaderLink);
	appHeader.append(appHeaderDate);

	appDiv.append(appHeader);
	return appDiv;
}

export default App;
