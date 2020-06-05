import React, { Component } from "react";

const projects = [
	{ title: "Butt", features: "React", link: "www.google.com" },
	{ title: "Ass", features: "PHP", link: "www.google.com" },
	{ title: "Halo", features: "JavaScript", link: "www.google.com" },
	{ title: "Slam", features: "SASS", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
	{ title: "Gopher", features: "React", link: "www.google.com" },
];

const projectsList = projects.map((project, i) => {
	return (
		<div className="project" key={i}>
			<h3>{project.title}</h3>
			<h5>{project.features}</h5>
			<a href={project.link}>
				<small>Link</small>
			</a>
		</div>
	);
});

export default class Projects extends Component {
	render() {
		return (
			<main id="Projects">
				<div id="sort">
					<h2 id="header">Projects</h2>
					<div id="buttons-container">
						<button>JavaScript</button>
						<button>TypeScript</button>
						<button>PHP</button>
						<button>React</button>
						<button>API's</button>
						<button>NoSQL</button>
						<button>SQL</button>
					</div>
				</div>
				<div id="projects-container">{projectsList}</div>
			</main>
		);
	}
}
