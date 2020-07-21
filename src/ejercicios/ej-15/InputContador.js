import React, { useState } from "react";

const InputContador = (props) => {
	const [initialCount1, setInitialCount1] = useState(0);
	const [initialCount2, setInitialCount2] = useState(0);
	const [initialCount3, setInitialCount3] = useState(0);

	const handleChange = (event) => {
		if (event.target.id === "count1") {
			setInitialCount1(parseInt(event.target.value));
		}
		if (event.target.id === "count2") {
			setInitialCount2(parseInt(event.target.value));
		}
		if (event.target.id === "count3") {
			setInitialCount3(parseInt(event.target.value));
		}
	};
	return (
		<>
			<input
				id="count1"
				type="number"
				style={{
					width: "50px",
					marginLeft: "4px",
				}}
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					props.handleClickCount1(initialCount1);
				}}
			>
				1
			</button>
			<input
				id="count2"
				type="number"
				style={{ width: "50px", marginLeft: "6px" }}
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					props.handleClickCount2(initialCount2);
				}}
			>
				2
			</button>
			<input
				id="count3"
				type="number"
				style={{ width: "50px", marginLeft: "6px" }}
				onChange={handleChange}
			/>
			<button
				onClick={() => {
					props.handleClickCount3(initialCount3);
				}}
			>
				3
			</button>
		</>
	);
};

export { InputContador };
