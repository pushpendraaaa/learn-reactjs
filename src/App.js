import "./App.css";
import GreetFunctional from "./components/01GreetFunctional";
import WelcomeClass from "./components/02WelcomeClass";
import WithAndWithoutJsx from "./components/03WithAndWithoutJsx";

function App() {
	return (
		<div className="App">
			<WithAndWithoutJsx />
			{/* <WelcomeClass /> */}
			{/* <GreetFunctional /> */}
			{/* <p>Hello World!</p> */}
		</div>
	);
}

export default App;
