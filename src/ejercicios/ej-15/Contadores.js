import React, { useState, useEffect } from "react";
import usePrevious from "./usePrevious";
import { InputContador } from "./InputContador";

const Contadores = (props) => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [lastChange, setLastChange] = useState(new Date()); // Last change debe almacenar la hora en la que se modificó el último contador
	const [history, setHistory] = useState([]); // Almacena el historico de cambios en los contadores ej. ["Contador-1: 2 -> 3; Contador-2: sin cambios ; Contador-3: sin cambios"]

	// Con estas constantes tendrás acceso al valor anterior de cada contador. El primer valor será undefined.
	const prevCount1 = usePrevious(count1);
	const prevCount2 = usePrevious(count2);
	const prevCount3 = usePrevious(count3);

	// -------------------------------------------------------------------------
	// ----------  MODIFICA A PARTIR DE ESTE PUNTO -----------------------------
	// -------------------------------------------------------------------------

	// Implementa un useEffect para cada uno de los contadores que detecte los cambios de estado de forma individual
	// y almacene en history el cambio del contador
	// Ej. ["Contador-1: 2 -> 3; Contador-2: sin cambios ; Contador-3: sin cambios"]
	// NO está permitido modificar lastChange en estos 3 useEffect

	// useEffect CONTADOR 1
	useEffect(() => {
		if (prevCount1 !== count1) {
			const result = `Contador-1: ${prevCount1} -> ${count1}; Contador-2: sin cambios ; Contador-3: sin cambios`;
			setHistory([...history, result]);
		}
	}, [count1]);

	// useEffect CONTADOR 2
	useEffect(() => {
		if (prevCount2 !== count2) {
			const result = `Contador-1: sin cambios; Contador-2:  ${prevCount2} -> ${count2} ; Contador-3: sin cambios`;
			setHistory([...history, result]);
		}
	}, [count2]);

	// useEffect CONTADOR 3
	useEffect(() => {
		if (prevCount3 !== count3) {
			const result = `Contador-1: sin cambios; Contador-2: sin cambios; Contador-3: ${prevCount3} -> ${count3}`;
			setHistory([...history, result]);
		}
	}, [count3]);

	// Implementa un useEffect para detectar un cambio en cualquiera de los contadores que actualice lastChange con la fecha
	// del último cambio (hint: new Date())

	useEffect(() => {
		setLastChange(new Date());
	}, [count1, count2, count3]);

	// BONUS: Modifica el componente Contadores para poder asignar valores iniciales a los contadores de forma opcional,
	// si no se define un valor inicial por prop, el valor inicial será 0

	useEffect(() => {
		setCount1(props.count1);
	}, [props.count1]);

	useEffect(() => {
		setCount2(props.count2);
	}, [props.count2]);

	useEffect(() => {
		setCount3(props.count3);
	}, [props.count3]);

	// Implementa un useEffect que simule el método componentDidMount para incluir en history el valor inicial de cada contador
	// ej. ["Valores iniciales -> Contador-1: 0; Contador-2: 0; Contador-3: 0"]

	useEffect(() => {
		setHistory([
			"Valores iniciales -> Contador-1: 0;  Contador-2: 0; Contador-3: 0",
		]);
	}, []);

	// -------------------------------------------------------------------------
	// ---------- AQUÍ TERMINA EL BLOQUE QUE PUEDES MODIFICAR ------------------
	// -------------------------------------------------------------------------
	return (
		<div className="alert alert-info">
			<button
				className="btn btn-primary m-2 p-2"
				onClick={() => setCount1(count1 + 1)}
			>
				Cont 1
			</button>
			<button
				className="btn btn-success m-2 p-2"
				onClick={() => setCount2(count2 + 1)}
			>
				Cont 2
			</button>
			<button
				className="btn btn-warning m-2 p-2"
				onClick={() => setCount3(count3 + 1)}
			>
				Cont 3
			</button>
			<br />
			<InputContador
				handleClickCount1={props.handleClickCount1}
				handleClickCount2={props.handleClickCount2}
				handleClickCount3={props.handleClickCount3}
			/>
			<h4>Último cambio: </h4>
			<p>{lastChange.toLocaleTimeString()}</p>
			<h4>Histórico de cambios en contadores</h4>
			<ol>
				{history.map((val) => (
					<li>{val}</li>
				))}
			</ol>
		</div>
	);
};

export default Contadores;
