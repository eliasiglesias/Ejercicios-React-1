import React, { useState, useEffect } from "react";
import { getMyIp } from "./get-ip";

const MyClass = () => {
	const [ipAddress, setIpAddress] = useState("...");

	useEffect(() => {
		async function getIp() {
			const data = await getMyIp();
			setIpAddress(data);
		}
		getIp();
	}, [ipAddress]);

	// Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

	return <h1>Mi ip es {ipAddress}</h1>;
};

export default MyClass;
