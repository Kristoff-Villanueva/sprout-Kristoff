import React from "react";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<Main />
		</div>
	);
}

export default App;
