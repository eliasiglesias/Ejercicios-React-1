import React, { useContext, useEffect, useState } from "react";
import CommentsContext from "../context/CommentsContext";
import { getComments } from "../api/getComments";
import { Comment } from "./Comment";
import { Col } from "reactstrap";

const CommentsGrid = () => {
	const [comments, setComments] = useState();

	const postId = useContext(CommentsContext);

	useEffect(() => {
		async function getCommentsById() {
			const data = await getComments(postId);

			setComments(data);
		}
		getCommentsById();
	}, [postId]);

	return (
		<Col xs="5">
			{comments && comments.map((value) => <Comment comment={value} />)}
		</Col>
	);
};

export { CommentsGrid };
