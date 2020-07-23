import React from "react";

const Post = (props) => {
	return (
		<div className="alert alert-warning border shadow px-5 pt-1">
			<div onClick={() => props.handleClick(props.post.id)}>
				<h5 onClick={() => props.handleClick(props.post.id)} className="ml-3">
					{props.post.title}
				</h5>
				<p onClick={() => props.handleClick(props.post.id)} className="ml-3">
					{props.post.body}
				</p>
			</div>
		</div>
	);
};

export { Post };
