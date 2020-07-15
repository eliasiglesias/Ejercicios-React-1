import React, { useState } from "react";

const MyState = () => {
	const [myText, setMyText] = useState("Hola Mundo");
	return (
		<div className="alert alert-primary">
			<p>
				El valor por defecto del estado es:{myText}
				{/* Muestra aquí el valor por defecto del estado */}
			</p>
		</div>
	);
};

export default MyState;
