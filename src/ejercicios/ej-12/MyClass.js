import React from "react";
import { getMyIp } from "./get-ip";

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { chuckFact: "..." };
	}

	handleClick = async () => {
		const data = await getMyIp();
		this.setState({ chuckFact: data.value });
	};

	render() {
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
				<button onClick={this.handleClick}>Cargar frase</button>
				<h1>Chuck fact {this.state.chuckFact}</h1>
			</div>
		);
	}
}

export default MyClass;
