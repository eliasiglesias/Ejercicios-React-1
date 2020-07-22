import React from "react";
import { Posts } from "./Posts";

const PostsGrid = () => {
	return (
		<div className="p-5 bg-info">
			<h4 className="font-weight-bold text-white text-center mb-3">
				<span className="border shadow bg-dark px-2">POSTS</span>
			</h4>
			<Posts />
		</div>
	);
};

export { PostsGrid };
