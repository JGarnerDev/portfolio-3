import React, { Component } from "react";

import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

let largerTitle = {
	fontSize: "2em",
};
let smallerTitle = {
	fontSize: "1em",
};
let smallerDesc = {
	fontSize: "0.7em",
};

export default class ProjectsList extends Component {
	render() {
		const { projects, keyword } = this.props;

		const projectsList = projects
			.filter((project) => {
				return project.keywords.indexOf(keyword) !== -1;
			})
			.map((project, i) => {
				let projectStyle = {
					backgroundImage: `url(${project.img})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 60% ",
				};
				let projectLink = `/projects/${project.name}`;
				if (i === projects.length - 1 && projects.length !== 3) {
					return (
						<NavLink
							className="project"
							key={i}
							style={projectStyle}
							to={projectLink}
						>
							<h1 style={largerTitle}>{project.name}</h1>

							<p>{project.desc}</p>
						</NavLink>
					);
				} else {
					return (
						<NavLink
							className="project"
							key={i}
							style={projectStyle}
							to={projectLink}
						>
							<h1 style={smallerTitle}>{project.name}</h1>

							<p style={smallerDesc}>{project.desc}</p>
						</NavLink>
					);
				}
			});

		return <div id="projects-container">{projectsList}</div>;
	}
}
