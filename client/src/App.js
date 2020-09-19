import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./pages/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoResult from "./pages/NoResult";

function App() {
  return (
      <Router>
        <div>
			<Nav />
			<Switch>
				<Route exact path={["/", "/search"]} component={Search} />
				<Route exact path="/saved" component={Saved} />
				<Route exact path="/*" component={NoResult} />
			</Switch>
		</div>
      </Router>
  );
}

export default App;
