import "./App.css";
import GreetFunctional from "./components/01GreetFunctional";
import WelcomeClass from "./components/02WelcomeClass";

function App() {
	return (
		<div className="App">
			<WelcomeClass />
			<GreetFunctional />
			{/* <p>Hello World!</p> */}
		</div>
	);
}

export default App;
