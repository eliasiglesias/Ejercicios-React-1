const URL = "https://jsonplaceholder.typicode.com/comments?postId=";

const getComments = async (id) => {
	const response = await fetch(`${URL}${id}`);
	const data = await response.json();
	if (response.status === 200) {
		return data;
	} else return "ERROR";
};

export { getComments };
