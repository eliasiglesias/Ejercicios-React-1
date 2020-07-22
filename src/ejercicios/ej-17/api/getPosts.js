const URL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	if (response.status === 200) {
		return data;
	} else return "ERROR";
};

export { getPosts };
