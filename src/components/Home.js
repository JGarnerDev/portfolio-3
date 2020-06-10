import React from "react";
import { Link } from "react-router-dom";
import picture from "../img/Me.jpg";
import resume from "../resume/Resume.pdf";
import githubLogo from "../img/githubLogo.png";
import linkedInLogo from "../img/linkedInLogo.png";
import codewarsLogo from "../img/codewarsLogo.png";

export default function Home() {
	return (
		<main id="Home" className="container">
			<section id="intro" className="row">
				<div id="picture-container" className="col-md-3">
					<img id="me" src={picture} alt="" />
					<div className="social-container">
						<a
							href="https://github.com/JGarnerDev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={githubLogo} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/in/jeffrey-garner-882851104/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkedInLogo} alt="" />
						</a>
						<a
							href="https://www.codewars.com/users/ElJeffe"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={codewarsLogo} alt="" />
						</a>
					</div>
				</div>
				<div id="text-container" className="col-md-8">
					<h1>Jeffrey Garner</h1>
					<h2>Front-end Developer</h2>
					<h6>• JavaScript • TypeScript • React • SASS •</h6>
					<h6>• PHP • SQL • NoSQL •</h6>

					<p>
						Welcome to my portfolio! I've been coding since 2019 mainly in
						JavaScript and React, but I have an energetic passion for computer
						science that draws me to explore several other programming concepts,
						languages, supersets, and frameworks.{" "}
					</p>
					<a href={resume}>Here's my resume!</a>
					<p>
						Take a look at the <Link to="/projects">projects</Link> or the{" "}
						<Link to="/blog/codechallenges"> programming challenges</Link> I've
						done so far!
					</p>
				</div>
			</section>
		</main>
	);
}
