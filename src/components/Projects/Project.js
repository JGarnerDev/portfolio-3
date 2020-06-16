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
			let displayedProject = { ...this.state.displayedProject };
			displayedProject.keywords = displayedProject.keywords
				.split(" ")
				.map((keyword) => {
					keyword = "/" + keyword;
					return <small>{keyword}</small>;
				});

			this.setState({ displayedProject });
		});
	};

	componentWillMount() {
		this.getProjects();
	}

	render() {
		if (this.state.displayedProject !== "") {
			let project = this.state.displayedProject;
			let links = () => {
				if (project.link === "") {
					return (
						<div id="links">
							<a
								href={project.gitlink}
								target="_blank"
								rel="noopener noreferrer"
							>
								See it on GitHub!
							</a>
						</div>
					);
				} else {
					return (
						<div id="links">
							<a
								href={project.link}
								id="link-hosted"
								target="_blank"
								rel="noopener noreferrer"
							>
								See it in action!
							</a>
							<a
								href={project.gitlink}
								id="link-git"
								target="_blank"
								rel="noopener noreferrer"
							>
								See it on GitHub!
							</a>
						</div>
					);
				}
			};
			let text = () => {
				if (project.review === "") {
					return (
						<div id="viewProject-text">
							<div id="desc">{project.desc}</div>
						</div>
					);
				} else {
					return (
						<div id="viewProject-text">
							<div id="desc">{project.desc}</div>
							<hr />
							<div
								id="review"
								dangerouslySetInnerHTML={{ __html: project.review }}
							></div>
						</div>
					);
				}
			};

			return (
				<div id="ViewProject">
					<h2 id="viewProject-title">{project.name}</h2>
					<div id="viewProject-container">
						<img id="viewProject-img" src={project.img} alt="" />
						<div id="meta">
							<div id="keywords">{project.keywords}</div>
							{links()}
						</div>
						{text()}
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default Project;
