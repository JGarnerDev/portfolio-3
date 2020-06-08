import React, { Component } from "react";

import ProjectsList from "./ProjectsList";

import { firebaseProjects } from "../../firebase";

export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			displayedProjects: [],
			keyword: "",
		};
	}
	getProjects = () => {
		firebaseProjects.once("value").then((snapshot) => {
			const projects = [];
			snapshot.forEach((childSnapshot) => {
				projects.push({
					...childSnapshot.val(),
					id: childSnapshot.key,
				});
			});
			this.setState({ projects });
			this.setState({ displayedProjects: this.state.projects });
		});
	};

	componentDidMount() {
		this.getProjects();
	}

	onUpdateFilter(keyword) {
		this.setState({
			displayedProjects: this.state.projects.filter((project) => {
				return project.keywords.indexOf(keyword) !== -1;
			}),
		});
	}

	render() {
		return (
			<main id="Projects">
				<h2 id="header">Projects</h2>
				<div className="btn-group">
					<button
						className="btn btn-secondary  dropdown-toggle"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Filter by category
					</button>
					<div className="dropdown-menu">
						<div
							onClick={() => {
								this.onUpdateFilter("");
							}}
						>
							All Projects
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("JavaScript");
							}}
						>
							JavaScript
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("TypeScript");
							}}
						>
							TypeScript
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("PHP");
							}}
						>
							PHP
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("React");
							}}
						>
							React
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("WordPress");
							}}
						>
							WordPress
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("SASS");
							}}
						>
							SASS
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("NoSQL");
							}}
						>
							NoSQL
						</div>
						<div
							onClick={() => {
								this.onUpdateFilter("SQL");
							}}
						>
							SQL
						</div>
					</div>
				</div>

				<ProjectsList
					projects={this.state.displayedProjects}
					keyword={this.state.keyword}
				/>
			</main>
		);
	}
}
