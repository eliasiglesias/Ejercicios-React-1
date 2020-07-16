const URL = "https://api.ipify.org/?format=json";

const getMyIp = async () => {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getMyIp };
