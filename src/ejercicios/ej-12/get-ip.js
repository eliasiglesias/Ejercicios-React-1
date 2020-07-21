const URL = "https://api.chucknorris.io/jokes/random";

const getMyIp = async () => {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	} catch (error) {
		return "Error";
	}
};

export { getMyIp };
