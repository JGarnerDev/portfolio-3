import React, { Component } from "react";

import { NavLink } from "react-router-dom";

let largerTitle = {
	fontSize: "2em",
};
let smallerTitle = {
	fontSize: "1em",
};
let largerDesc = {
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
					backgroundSize: "auto 80% ",
					flexGrow: 1,
					height: "300px",
				};
				let projectBigStyle = {
					backgroundImage: `url(${project.img})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 80% ",
					flexGrow: 2,
					height: "300px",
					paddingLeft: "5%",
					paddingRight: "5%",
				};
				let projectLonelyStyle = {
					backgroundImage: `url(${project.img})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 70% ",
					flexGrow: 2,
					height: "300px",
					width: "90vw",
					paddingLeft: "5%",
					paddingRight: "5%",
				};
				let projectLink = `/projects/${project.name}`;
				if (projects.length === 1) {
					return (
						<div className="project" style={projectLonelyStyle}>
							<NavLink className="project-content" key={i} to={projectLink}>
								<h1 style={largerTitle}>{project.name}</h1>

								<p style={largerDesc}>{project.desc}</p>
							</NavLink>
						</div>
					);
				} else if (i === projects.length - 1 && projects.length !== 3) {
					return (
						<div className="project" style={projectBigStyle}>
							<NavLink key={i} to={projectLink} className="project-content">
								<h1 style={largerTitle}>{project.name}</h1>

								<p style={smallerDesc}>{project.desc}</p>
							</NavLink>
						</div>
					);
				} else {
					return (
						<div className="project" style={projectStyle}>
							<NavLink className="project-content" key={i} to={projectLink}>
								<h1 style={smallerTitle}>{project.name}</h1>

								<p style={smallerDesc}>{project.desc}</p>
							</NavLink>
						</div>
					);
				}
			});

		return <div id="projects-container">{projectsList}</div>;
	}
}
