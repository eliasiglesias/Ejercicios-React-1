import React from "react";

const Boton = (props) => {
	const sumaClick = () => {
		// Ingresa aquí tu código para aumentar el contador
		props.setClicks(props.clicks + 1);
	};

	return (
		<button className="btn btn-info" onClick={sumaClick}>
			suma 1
		</button>
	);
};

export default Boton;
