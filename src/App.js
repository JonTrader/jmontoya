import React from 'react';
import './App.css';
import Welcome from './Pages/welcome.js';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Projects from './Pages/projects.js';
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
	return (

		<div >
			<Switch>
				<Route path="/home" exact component={Home}/>
				<Route path="/about" exact component={About}/>
				<Route path="/projects" exact component={Projects}/>
				{/* 
				<Route path="/contact" exact component={Contact}/> */}
				<Route path="/" exact component={Welcome}/>
			</Switch>
		</div>
		
	);
}

export default App;
