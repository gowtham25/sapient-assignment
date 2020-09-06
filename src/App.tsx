import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SpaceXComponent from './Components/SpaceXComponent';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:limit?/:launch_year?/:launch_success?/:land_success?" children={<SpaceXComponent />} />
			</Switch>
		</Router>
	);
}

export default App;
