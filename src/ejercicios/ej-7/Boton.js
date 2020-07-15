import React from "react";

const Boton = (props) => {
	const sumaClick = () => {
		props.setClicks(props.clicks + 1);
		// Ingresa aquí tu código para aumentar el contador
	};

	return (
		<button className="btn btn-info" onClick={sumaClick}>
			suma 1
		</button>
	);
};

export default Boton;
