import React, { useState, useEffect } from "react";
import { getMyIp } from "./get-ip";

const MyClass = () => {
	const [ipAddress, setIpAddress] = useState("...");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getIp() {
			const data = await getMyIp();
			setIpAddress(data.ip);
			setIsLoading(false);
		}
		getIp();
	}, [ipAddress]);
	return (
		<div>
			{isLoading ? <h1>Cargando...</h1> : <h1>Mi ip es {ipAddress}</h1>}
		</div>
	);
};

export default MyClass;
