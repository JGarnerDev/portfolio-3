import React from "react";

export default function postTemplates(props) {
	console.log(props);

	switch (props) {
		case "codeChallenges":
			return props.map((blog, i) => {
				return (
					<div className="blogpost" key={i}>
						<div className="blogpost-header">
							<h2 className="blogpost-title">{blog.name}</h2>
							<small className="blogpost-date">{blog.date}</small>
							<div className="blogpost-keywords">
								{blog.keywords.split(" ").join(" • ")}
							</div>
						</div>

						<h3>The Challenge:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[0]} alt="" />
						</div>

						<h3>Process:</h3>
						<p
							className="blogpost-text"
							dangerouslySetInnerHTML={{ __html: blog.content[2] }}
						></p>

						<h3>My Solution:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[1]} alt="" />
						</div>
					</div>
				);
			});
		case "wiut":
			return props.map((blog, i) => {
				return (
					<div className="blogpost" key={i}>
						<div className="blogpost-header">
							<h2 className="blogpost-title">{blog.name}</h2>
							<small className="blogpost-date">{blog.date}</small>
							<div className="blogpost-keywords">
								{blog.keywords.split(" ").join(" • ")}
							</div>
						</div>

						<h3>The Challenge:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[0]} alt="" />
						</div>

						<h3>Process:</h3>
						<p
							className="blogpost-text"
							dangerouslySetInnerHTML={{ __html: blog.content[2] }}
						></p>

						<h3>My Solution:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[1]} alt="" />
						</div>
					</div>
				);
			});
		default:
			return props.map((blog, i) => {
				return (
					<div className="blogpost" key={i}>
						<div className="blogpost-header">
							<h2 className="blogpost-title">{blog.name}</h2>
							<small className="blogpost-date">{blog.date}</small>
							<div className="blogpost-keywords">
								{blog.keywords.split(" ").join(" • ")}
							</div>
						</div>

						<h3>The Challenge:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[0]} alt="" />
						</div>

						<h3>Process:</h3>
						<p
							className="blogpost-text"
							dangerouslySetInnerHTML={{ __html: blog.content[2] }}
						></p>

						<h3>My Solution:</h3>
						<div className="img-wrapper">
							<img className="blog-img" src={blog.content[1]} alt="" />
						</div>
					</div>
				);
			});
	}
}
