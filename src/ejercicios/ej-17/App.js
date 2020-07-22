import React, { useState, useEffect } from "react";
import { getPosts } from "./api/getPosts";
import { getUsers } from "./api/getUsers";
import UsersContext from "./context/UsersContext";
import PostsContext from "./context/PostsContext";
import { PostsGrid } from "./components/PostsGrid";

const App = () => {
	const [users, setUsers] = useState();
	const [posts, setPosts] = useState();

	useEffect(() => {
		async function getAllUsers() {
			const result = await getUsers();
			setUsers(result);
		}
		async function getAllPosts() {
			const result = await getPosts();
			setPosts(result);
		}
		getAllPosts();
		getAllUsers();
	}, []);

	return (
		<div>
			<UsersContext.Provider value={users}>
				<PostsContext.Provider value={posts}>
					<PostsGrid />
				</PostsContext.Provider>
			</UsersContext.Provider>
		</div>
	);
};

export default App;
