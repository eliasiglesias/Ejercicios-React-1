import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";
import PostsContext from "../context/PostsContext";
import { getPostsList } from "../aux-functions/getPostsList";

const Posts = () => {
	const users = useContext(UsersContext);
	const posts = useContext(PostsContext);

	const [postsTable, setPostsTable] = useState([]);

	useEffect(() => {
		if (posts && users) {
			setPostsTable(getPostsList(posts, users));
		}
	}, [posts, users]);

	return <div>{postsTable}</div>;
};

export { Posts };
