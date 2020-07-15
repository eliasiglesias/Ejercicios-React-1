import React, { useState } from "react";

const Contador = () => {
	const [clicks, setClicks] = useState(0);
	const sumaClick = () => {
		// Ingresa aquí tu código para aumentar el contador
		setClicks(clicks + 1);
	};

	return (
		<div className="alert alert-primary">
			<p>
				<b>Has dado {clicks} clicks</b>
			</p>
			<button className="btn btn-info" onClick={sumaClick}>
				suma 1
			</button>
		</div>
	);
};

export default Contador;
