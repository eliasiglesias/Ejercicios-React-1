const URL = "https://api.ipify.org/pepe/?format=json";

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
