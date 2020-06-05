import React from "react";

import gaming from "../img/Games.png";
import jogging from "../img/running.png";

export default function AboutMe() {
	return (
		<main id="AboutMe">
			<h2>What I'm into</h2>
			<div id="passions-container">
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src={gaming} alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Gaming</h3>
						<p>
							I'm a sucker for Dungeons & Dragons, Risk, Chess, and a few PC
							games.
						</p>
					</div>
				</div>
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src={jogging} alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Jogging</h3>
						<p>...usually followed by pizza.</p>
					</div>
				</div>
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src="" alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Literature</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							quae dignissimos omnis qui explicabo repellendus!
						</p>
					</div>
				</div>
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src="" alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Cooking</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							quae dignissimos omnis qui explicabo repellendus!
						</p>
					</div>
				</div>
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src="" alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Computer Science</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							quae dignissimos omnis qui explicabo repellendus!
						</p>
					</div>
				</div>
				<div className="passion row-cols-2">
					<div className="graphic-wrapper col-3">
						<img src="" alt="" />
					</div>
					<div className="textbox col-9">
						<h3>Music</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							quae dignissimos omnis qui explicabo repellendus!
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
