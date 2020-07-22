import React from "react";

const Post = (props) => {
	return (
		<div className="border shadow bg-light mx-5 px-5 pt-1">
			<div className="d-flex">
				<h6 className="px-5 text-secondary">@{props.username}</h6>
				<div className="border-left">
					<h5 className="ml-3">{props.post.title}</h5>
					<p className="ml-3">{props.post.body}</p>
				</div>
			</div>
		</div>
	);
};

export { Post };
