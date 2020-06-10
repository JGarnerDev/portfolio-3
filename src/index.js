import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import "./firebase";

import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog/Blog";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";

import "./index.scss";
import { firebaseWIUT, firebaseCodeChallenges } from "./firebase";

require("dotenv").config();

function App() {
	return (
		<Router>
			<React.Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/projects/:id" component={Project} />

					<Route
						exact
						path="/blog/wiut"
						component={() => <Blog retrieveFrom={firebaseWIUT} />}
					/>

					<Route
						exact
						path="/blog/codechallenges"
						component={() => <Blog retrieveFrom={firebaseCodeChallenges} />}
					/>

					<Route exact path="/aboutme" component={AboutMe} />

					<Redirect from="*" to="/" />
				</Switch>
			</React.Fragment>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
