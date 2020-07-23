import React from "react";

const Comment = (props) => {
	const username = props.comment.email.slice(
		0,
		props.comment.email.indexOf("@")
	);

	return (
		<div className="border alert alert-info">
			<h6>
				@{username}
				<span className="text-secondary">(Post {props.comment.postId})</span>
			</h6>
			<p>{props.comment.body}</p>
		</div>
	);
};

export { Comment };
