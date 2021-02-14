import "./App.css";
// import LifeCycleA from "./components/14-lifecycle-method/1402-updating/1401-LifeCycleA";
// import Fragment from "./components/15-fragments/1501-Fragment";
// import Table from "./components/15-fragments/1502-Table";
// import PureComp from "./components/16-pure-component/1601-PureComp";
// import ParentComp from "./components/16-pure-component/1603-ParentComp";
// import RefsDemo from "./components/18-refs/1801-RefsDemo";
// import FocusInput from "./components/18-refs/1803-FocusInput";
// import FRParentInput from "./components/18-refs/1805-FRParentInput";
// import PortalDemo from "./components/19-portals/1901-PortalDemo";
// import Hero from "./components/20-error-handling/2001-Hero";
// import ErrorBoundary from "./components/20-error-handling/2002-ErrorBoundary";
import ClickCounter from "./components/21-hoc/2101-ClickCounter";
import HoverCounter from "./components/21-hoc/2102-HoverCounter";
// import "./1304-appStyle.css";
// import styles from "./1305-appStyle.module.css";
// import Form from "./components/13-form-handing/1301-Form";
// import LifeCycleA from "./components/14-lifecycle-method/1401-mounting/1401-LifeCycleA";
// import Inline from "./components/13-styling/1303-Inline";
// import Stylesheet from "./components/13-styling/1301-Stylesheet";
// import NameList from "./components/12-list-rendering/1201-NameList";
// import UserGreeting from "./components/11-conditional-rendering/11-UserGreeting";
// import ParentComponent from "./components/01-method-as-props/09-ParentComponent";
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
			<ClickCounter name="Pushpendra" />
			<HoverCounter />
			{/* <ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Batman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			{/* <ErrorBoundary>
				<Hero heroName="Superman" />
				<Hero heroName="Batman" />
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <ParentComp /> */}
			{/* <PureComp /> */}
			{/* <Table /> */}
			{/* <Fragment /> */}
			{/* <LifeCycleA /> */}
			{/* <Form /> */}
			{/* <h1 className="error">Error</h1> */}
			{/* <h1 className={styles.success}>Success</h1> */}
			{/* <Inline /> */}
			{/* <Stylesheet primary={true} /> */}
			{/* <NameList /> */}
			{/* <UserGreeting /> */}
			{/* <ParentComponent /> */}
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
