import "./App.css";
import ParentComponent from "./components/01-method-as-props/09-ParentComponent";
// import GreetFunctional from "./components/01GreetFunctional";
// import WelcomeClass from "./components/02WelcomeClass";
// import WithAndWithoutJsx from "./components/03WithAndWithoutJsx";
// import Message from "./components/04Message";
// import Counter from "./components/05Counter";
// import FunctionClick from "./components/06FunctionClick";
// import ClassClick from "./components/07ClassClick";
// import EventBind from "./components/08EventBind";

function App() {
	return (
		<div className="App">
			<ParentComponent />
			{/* <EventBind /> */}
			{/* <ClassClick /> */}
			{/* <FunctionClick /> */}
			{/* <Counter /> */}
			{/* <Message /> */}
			{/* <WelcomeClass name="Bruce" heroName="Batman">
				This is children props.
			</WelcomeClass>
			<WelcomeClass name="Clark" heroName="Superman">
				<button>Action</button>
			</WelcomeClass>
			<WelcomeClass name="Diana" heroName="Wonder Women" />
			<GreetFunctional name="Bruce" heroName="Batman">
				This is children props.
			</GreetFunctional>
			<GreetFunctional name="Clark" heroName="Superman">
				<button>Action</button>
			</GreetFunctional>
			<GreetFunctional name="Diana" heroName="Wonder Women" /> */}
			{/* <WithAndWithoutJsx /> */}
			{/* <WelcomeClass /> */}
			{/* <GreetFunctional /> */}
			{/* <p>Hello World!</p> */}
		</div>
	);
}

export default App;
