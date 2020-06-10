import React from "react";

export default function AboutMe() {
	return (
		<main id="AboutMe" className="row ">
			<div id="intro" className="col-lg-8">
				<h3>A little about myself</h3>
				<hr />
				<p>
					Up until 2019, I never considered web development. I had been a cook,
					a Liberal Arts student, a musician in an 80's power metal band, a
					traveller, and altogether interested in gathering new experiences
					rather than settling on a particular direction.
				</p>
				<p>Programming changed that.</p>
				<p>
					While I never left my old hobbies and interests, computer programming
					and web development took the fore as I attended and completed
					Concordia's Full-Stack Web Development program. What began as getting
					too excited about DOM manipulation and making buttons to change
					colours on screen turned in to eagerly asking my friends "what would
					you want an app for?"
				</p>
				<p>
					To this day, my friends still use my first web app to make Dungeons &
					Dragons characters.{" "}
					<a href="https://eljeffechargen.netlify.app/">
						Go ahead and take it for a spin!
					</a>{" "}
				</p>
				<p>
					Web Development and writing clean, readible, efficient code is hard,
					but I'm overjoyed with the rewards. Take a look at my blog section for
					the variety of code challenges I take on, or to see what I'm up to
					with regards to new projects and technologies!
				</p>
			</div>
			<div id="hobbies-container" className="col-lg-2">
				<h6>Hobbies & Interests</h6>
				<hr />
				<div className="hobby">
					<svg
						class="bi bi-book"
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"
						/>
						<path
							fill-rule="evenodd"
							d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"
						/>
					</svg>
					<p className="hobby-text">
						<strong>Literature</strong> <br />
						(Sci-fi, Fantasy, Classics, Philosophy)
					</p>
				</div>
				<div className="hobby">
					<svg
						class="bi bi-music-note-beamed"
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
						<path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
						<path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
					</svg>
					<p className="hobby-text">
						<strong>Music</strong> <br />
						(Guitar, Blues, Rock, Classical)
					</p>
				</div>
				<div className="hobby">
					<svg
						class="bi bi-basket"
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.243 1.071a.5.5 0 0 1 .686.172l3 5a.5.5 0 1 1-.858.514l-3-5a.5.5 0 0 1 .172-.686zm-4.486 0a.5.5 0 0 0-.686.172l-3 5a.5.5 0 1 0 .858.514l3-5a.5.5 0 0 0-.172-.686z"
						/>
						<path
							fill-rule="evenodd"
							d="M1 7v1h14V7H1zM.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H.5z"
						/>
						<path
							fill-rule="evenodd"
							d="M14 9H2v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9zM2 8a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1H2z"
						/>
						<path
							fill-rule="evenodd"
							d="M4 10a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5z"
						/>
					</svg>
					<p className="hobby-text">
						<strong>Cooking</strong> <br />
						(Barbeque, Baking, Anything Potato)
					</p>
				</div>
				<div className="hobby">
					<svg
						class="bi bi-star"
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
						/>
					</svg>
					<p className="hobby-text">
						<strong>Games</strong> <br />
						(Chess, PC , Dungeons and Dragons)
					</p>
				</div>
				<div className="hobby">
					<svg
						class="bi bi-lightning"
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
						/>
					</svg>
					<p className="hobby-text">
						<strong>Exercise</strong> <br />
						(Jogging, Martial Arts, Carrying all the groceries at once)
					</p>
				</div>
			</div>
		</main>
	);
}
