import React, { useState } from "react";
import { PostsGrid } from "./components/PostsGrid";
import CommentsContext from "./context/CommentsContext";
import { CommentsGrid } from "./components/CommentsGrid";
import { Container, Row } from "reactstrap";

const App = () => {
	const [selectedPost, setSelectedPost] = useState();

	const changeSelectedPost = (id) => {
		setSelectedPost(id);
	};

	return (
		<Container className="mt-3">
			<Row>
				<PostsGrid changeSelectedPost={changeSelectedPost} />
				<CommentsContext.Provider value={selectedPost}>
					<CommentsGrid />
				</CommentsContext.Provider>
			</Row>
		</Container>
	);
};

export default App;
