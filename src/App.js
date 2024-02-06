import logo from "./logo.svg"; // императивный стиль начало
import "./App.css";
import Year from './components/getYear';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> {/* императивный стиль конец */}
				<Year /> {/* строка декларативного стиля */}
			</header> {/* императивный стиль начало */}
		</div>
	);
}

export default App;  // императивный стиль конец
