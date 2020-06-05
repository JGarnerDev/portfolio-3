import React, { Component } from "react";

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: this.props.blogs,
		};
	}

	render() {
		let content = this.state.blogs.map((blog, i) => {
			let keywords = blog.keywords.map((keyword) => {
				return <small>/{keyword} </small>;
			});
			return (
				<div className="blogpost" key={i}>
					<div className="blogpost-header">
						<h2 className="blogpost-title">{blog.title}</h2>
						<small className="blogpost-date">{blog.date}</small>
						<div className="blogpost-keywords">{keywords}</div>
					</div>
					<p className="blogpost-content">{blog.content}</p>
				</div>
			);
		});

		return <main id="Blog">{content}</main>;
	}
}

export default Blog;
