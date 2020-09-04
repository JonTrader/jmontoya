import React from 'react';
import './App.css';
import Welcome from './Pages/welcome.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (

		<div >
			<Router>
				<Switch>
					{/* <Route path="/home" exact component={Home}/>
					<Route path="/about" exact component={About}/>
					<Route path="/projects" exact component={Projects}/>
					<Route path="/contact" exact component={Contact}/> */}
					<Route path="/" exact component={Welcome}/>
				</Switch>
			</Router>
		</div>
		
	);
}

export default App;
