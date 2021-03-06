import React, { useState } from "react";
import { getMyIp } from "./get-ip";

const MyClass = () => {
	const [chuckFact, setChuckFact] = useState("...");

	const handleClick = async () => {
		const data = await getMyIp();
		setChuckFact(data.value);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img
				src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg"
				alt=""
			/>
			<button onClick={handleClick}>Cargar frase</button>
			<h1>Chuck fact {chuckFact}</h1>
		</div>
	);
};

export default MyClass;
