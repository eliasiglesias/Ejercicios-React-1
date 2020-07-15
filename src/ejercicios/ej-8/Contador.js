import React, { useState, useEffect } from "react";
import Par from "./Par";
import Impar from "./Impar";

const Contador = () => {
	const [counter, setCounter] = useState(0);
	const [showPar, setShowPar] = useState(true);

	const soyPar = (num) => {
		// Esta función regresa un TRUE si el número es par o FALSE si es impar. (No es necesario modificar esta función)
		console.log(num % 2 === 0);
		return num % 2 === 0;
	};

	useEffect(() => {
		soyPar(counter) ? setShowPar(true) : setShowPar(false);
	}, [counter]);

	// PISTA: Puedes utilizar operadores ternarios
	// PISTA 2: https://reactjs.org/docs/conditional-rendering.html

	return (
		<div className="alert alert-primary">
			<p>Has dado {counter} clicks</p>
			<button onClick={() => setCounter(counter + 1)}>suma 1</button>
			{showPar ? <Par /> : <Impar />}
		</div>
	);
};

export default Contador;
