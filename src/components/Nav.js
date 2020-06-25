import React from "react";
import { Link } from "react-router-dom";

import logo from "../../src/img/logo.png";
import resume from "../resume/Resume.pdf";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark ">
			<Link className="navbar-brand logo-wrapper" to="/">
				<img src={logo} alt="" className="logo" />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExample04"
				aria-controls="navbarsExample04"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon "></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExample04">
				<ul className="navbar-nav mr-auto">
					<Link className="nav-item" to="/">
						<li
							className="nav-link"
							data-toggle="collapse"
							data-target=".navbar-collapse.show"
						>
							Home
						</li>
					</Link>

					<Link className="nav-item" to="/projects">
						<li
							className="nav-link"
							data-toggle="collapse"
							data-target=".navbar-collapse.show"
						>
							Projects
						</li>
					</Link>
					<Link className="nav-item" to="/aboutme">
						<li
							className="nav-link"
							data-toggle="collapse"
							data-target=".navbar-collapse.show"
						>
							About Me
						</li>
					</Link>

					<li
						className="nav-item dropdown"
						data-toggle="collapse"
						data-target=".navbar-collapse.show"
					>
						<a
							className="nav-link dropdown-toggle"
							href="/"
							id="dropdown04"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Resume
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdown04">
							<a className="dropdown-item" href={resume}>
								See it
							</a>
							<a className="dropdown-item" href={resume} download>
								Download it
							</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="/blog"
							id="dropdown04"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Blog
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="dropdown04"
							data-toggle="collapse"
							data-target=".navbar-collapse.show"
						>
							<Link className="dropdown-item" to="/blog/wiut">
								What I'm up to
							</Link>
							<Link className="dropdown-item" to="/blog/codechallenges">
								Code Challenges
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}
