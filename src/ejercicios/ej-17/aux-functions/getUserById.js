const getUserById = (array, id) => {
	const result = array.find((value) => value.id === id);
	return result.username;
};

export { getUserById };
