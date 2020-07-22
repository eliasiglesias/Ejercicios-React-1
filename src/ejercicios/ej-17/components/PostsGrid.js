import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";
import PostsContext from "../context/PostsContext";
import { Post } from "./Post";
import { getUserById } from "../aux-functions/getUserById";
import { Spinner } from "reactstrap";

const PostsGrid = () => {
	const users = useContext(UsersContext);
	const posts = useContext(PostsContext);

	return users && posts ? (
		<div className="p-5 bg-info">
			<h4 className="font-weight-bold text-white text-center mb-3">
				<span className="border shadow bg-dark px-2">POSTS</span>
			</h4>
			{posts.map((post) => (
				<Post
					username={getUserById(users, post.userId)}
					post={{ title: post.title, body: post.body }}
				/>
			))}
		</div>
	) : (
		<Spinner color="danger" />
	);
};

export { PostsGrid };
