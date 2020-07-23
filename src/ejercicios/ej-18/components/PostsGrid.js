import React, { useState, useEffect } from "react";
import { getPosts } from "../api/getPosts";
import PostsContext from "../context/PostsContext";
import { Post } from "./Post";
import { Col } from "reactstrap";

const PostsGrid = (props) => {
	const [posts, setPosts] = useState();
	const [selectedPost, setSelectedPost] = useState();

	const handleClick = (id) => {
		setSelectedPost(id);
	};

	useEffect(() => {
		props.changeSelectedPost(selectedPost);
	}, [selectedPost]);

	useEffect(() => {
		async function getApi() {
			const data = await getPosts();
			setPosts(data);
		}
		getApi();
	}, []);

	return (
		<Col xs="7" className="alert alert-success">
			<PostsContext.Provider value={posts}>
				{posts &&
					posts.map((value) => <Post handleClick={handleClick} post={value} />)}
			</PostsContext.Provider>
		</Col>
	);
};

export { PostsGrid };
