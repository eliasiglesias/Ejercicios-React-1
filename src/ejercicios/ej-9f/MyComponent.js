import React, { useState, useEffect } from "react";
import { getMyIp } from "./get-ip.js";

const MyClass = () => {
	const [ipAddress, setIpAddress] = useState("..");

	useEffect(() => {
		async function getIp() {
			const data = await getMyIp();
			setIpAddress(data.ip);
		}
		getIp();
	}, [ipAddress]);

	return <h1>Mi ip es {ipAddress}</h1>;
};

export default MyClass;
