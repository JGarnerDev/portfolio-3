import React, { Component } from "react";
import BlogTemplate from "./post-templates";

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}

	getBlogs = () => {
		this.props.retrieveFrom.once("value").then((snapshot) => {
			const blogs = [];
			snapshot.forEach((childSnapshot) => {
				blogs.push({
					...childSnapshot.val(),
					id: childSnapshot.key,
				});
			});
			this.setState({ blogs });
		});
	};

	renderBlogs = () => {
		return <BlogTemplate blogs={this.props.blogs} />;
	};

	componentDidMount() {
		this.getBlogs();
	}

	render() {
		let content = this.state.blogs.map((blog, i) => {
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

		return <main id="Blog">{content}</main>;
	}
}

export default Blog;
