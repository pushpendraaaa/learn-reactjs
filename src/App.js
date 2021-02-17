import React from "react";
import "./App.css";
import Counter from "./react-hooks/32-Counter";
// import DataFetchingOne from "./react-hooks/26-DataFetchingOne";
// import DataFetchingTwo from "./react-hooks/27-DataFetchingTwo";
// import ParentComponent from "./react-hooks/28-ParentComponent";
// import CounterTwo from "./components/18-CounterTwo";
// import CounterThree from "./react-hooks/19-CounterThree";
// import ComponentA from "./react-hooks/useReducer-with-useContext/20-ComponentA";
// import ComponentB from "./react-hooks/useReducer-with-useContext/21-ComponentB";
// import ComponentC from "./react-hooks/useReducer-with-useContext/22-ComponentC";
// import CounterOne from "./react-hooks/17-CounterOne";
// import ComponentC from "./react-hooks/context-api/14-ComponentC";
// import ClassCounter from "./react-hooks/01-ClassCounter";
// import HookCounter from "./react-hooks/02-HookCounter";
// import HookCounterTwo from "./react-hooks/03-HookCounterTwo";
// import HookCounterThree from "./react-hooks/04-HookCounterThree";
// import HookCounterFour from "./react-hooks/05-HookCounterFour";
// import ClassCounterOne from "./react-hooks/06-ClassCounterOne";
// import HookCounterOne from "./react-hooks/07-HookCounterOne";
// import ClassMouse from "./react-hooks/08-ClassMouse";
// import HookMouse from "./react-hooks/09-HookMouse";
// import MouseContainer from "./react-hooks/10-MouseContainer";
// import IntervalClassCounter from "./react-hooks/11-IntervalClassCounter";
// import IntervalHookCounter from "./react-hooks/12-IntervalHookCounter";
// import DataFetching from "./react-hooks/13-DataFetching";
// import ComponentC from "./components/23-context-api/2301-ComponentC";
// import { UserProvider } from "./components/23-context-api/2304-UserContext";
// import PostList from "./components/24-http/2401-PostList";
// import PostForm from "./components/24-http/2402-PostForm";
// import Counter from "./components/22-render-props/2204-Counter";
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
// import ClickCounter from "./components/21-hoc/2101-ClickCounter";
// import HoverCounter from "./components/21-hoc/2102-HoverCounter";
// import ClickCounterTwo from "./components/22-render-props/2201-ClickCounterTwo";
// import HoverCounterTwo from "./components/22-render-props/2202-HoverCounterTwo";
// import User from "./components/22-render-props/2203-User";
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

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
// 	switch (action) {
// 		case "increment":
// 			return state + 1;
// 		case "decrement":
// 			return state - 1;
// 		case "reset":
// 			return initialState;
// 		default:
// 			return state;
// 	}
// };

function App() {
	// const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<Counter />
			{/* <ParentComponent /> */}
			{/* <DataFetchingTwo /> */}
			{/* <DataFetchingOne /> */}
			{/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
				Count - {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</CountContext.Provider> */}
			{/* <CounterThree /> */}
			{/* <CounterTwo /> */}
			{/* <CounterOne /> */}
			{/* <UserContext.Provider value={"Pushpendra"}>
				<ChannelContext.Provider value={"Code Evolution"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* <DataFetching /> */}
			{/* <IntervalHookCounter /> */}
			{/* <IntervalClassCounter /> */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassMouse /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterTwo /> */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}
			{/* <PostForm /> */}
			{/* <PostList /> */}
			{/* <UserProvider value="Pushpendra">
				<ComponentC />
			</UserProvider> */}
			{/* <Counter
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<Counter
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/> */}
			{/* <User render={(isLoggedIn) => (isLoggedIn ? "Pushpendra" : "Guest")} /> */}
			{/* <User name={() => "Pushpendra"} /> */}
			{/* <User name="Pushpendra" /> */}
			{/* <HoverCounterTwo /> */}
			{/* <ClickCounterTwo /> */}
			{/* <ClickCounter name="Pushpendra" /> */}
			{/* <HoverCounter /> */}
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
