import React from "react";
import { Link } from "react-router-dom";
import picture from "../img/Me.jpg";

export default function Home() {
	return (
		<main id="Home" className="container">
			<section id="intro" className="row">
				<div id="picture-container" className="col-md-3">
					<img src={picture} alt="" />
				</div>
				<div id="text-container" className="col-md-8">
					<h4>Hey there!</h4>
					<br />
					<p>
						Welcome to my portfolio! My name's Jeff Garner, and I'm a Front-end
						web developer. I've been coding since 2019 mainly in JavaScript and
						React, but I have an energetic passion for computer science that
						draws me to explore several other programming concepts, languages,
						supersets, and frameworks. <br /> <br /> Feel free to take a look at
						the <Link to="/projects">projects</Link> or the{" "}
						<Link to="/blog"> programming challenges</Link> I've done so far!
					</p>
				</div>
			</section>
		</main>
	);
}
