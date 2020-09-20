import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Saved from "./pages/Saved";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/saved" component={Saved} />
			</Switch>
      </Router>
  );
}

export default App;
