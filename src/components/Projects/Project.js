import React, { Component } from "react";

import { firebaseProjects } from "../../firebase";

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			displayedProject: "",
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
			this.setState({
				displayedProject: this.state.projects.filter((project) => {
					return project.name === this.props.match.params.id;
				})[0],
			});
		});
	};

	componentWillMount() {
		this.getProjects();
	}

	render() {
		if (this.state.displayedProject !== "") {
			let project = this.state.displayedProject;
			return (
				<div>
					<div>{project.img}</div>
					<div>{project.name}</div>
					<div>{project.desc}</div>
					<div>{project.keywords}</div>

					<div>{project.link}</div>
					<div>{project.gitlink}</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default Project;
