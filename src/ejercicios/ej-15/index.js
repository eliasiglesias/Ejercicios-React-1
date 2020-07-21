import React, { useState } from "react";
import Contadores from "./Contadores";

const Ejercicio15 = () => {
	const [initialCount1, setInitialCount1] = useState(0);
	const [initialCount2, setInitialCount2] = useState(0);
	const [initialCount3, setInitialCount3] = useState(0);

	const handleClickCount1 = (number) => {
		setInitialCount1(number);
	};

	const handleClickCount2 = (number) => {
		setInitialCount2(number);
	};

	const handleClickCount3 = (number) => {
		setInitialCount3(number);
	};

	return (
		<Contadores
			count1={initialCount1}
			count2={initialCount2}
			count3={initialCount3}
			handleClickCount1={handleClickCount1}
			handleClickCount2={handleClickCount2}
			handleClickCount3={handleClickCount3}
		/>
	);
};

export default Ejercicio15;
