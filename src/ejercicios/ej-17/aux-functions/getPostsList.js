import React from "react";
import { getUserById } from "../aux-functions/getUserById";

const getPostsList = (posts, users) =>
	posts.map((post) => {
		return (
			<div className="border shadow bg-light px-4 pt-1">
				<div className="d-flex">
					<h6 className="pr-2 text-secondary">
						@{getUserById(users, post.userId)}
					</h6>
					<div className="border-left">
						<h5 className="ml-3">{post.title}</h5>
						<p className="ml-3">{post.body}</p>
					</div>
				</div>
			</div>
		);
	});

export { getPostsList };
