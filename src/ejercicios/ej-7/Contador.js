import React, { useState } from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

const Contador = () => {
	const [clicks, setClicks] = useState(0);

	return (
		<div className="alert alert-primary">
			<MyLabel clicks={clicks} />
			<Boton setClicks={setClicks} clicks={clicks} />
		</div>
	);
};

export default Contador;
