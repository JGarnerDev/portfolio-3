import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

// Blog Stuff

import Blog from "./components/Blog/Blog";

// Project Stuff
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/project-template";

import "./index.scss";

let WhatImUpTo = [
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. ",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
	{
		title: "Gopher",
		keywords: ["JavaScript", "Algorithm"],
		date: "April 5th, 2020",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quos rem quasi aliquam ex voluptate autem totam sapiente magni eos voluptas, quo ipsam non. Labore cum laborum pariatur ad!",
	},
];

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
						component={() => <Blog blogs={WhatImUpTo} />}
					/>
					<Route
						exact
						path="/blog/codechallenges"
						component={() => <Blog blogs={WhatImUpTo} />}
					/>
					<Route exact path="/aboutme" component={AboutMe} />
				</Switch>
			</React.Fragment>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
