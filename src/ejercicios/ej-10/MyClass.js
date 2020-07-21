import React from "react";
import { getMyIp } from "./get-ip";

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ipAddress: "..." };
	}

	async componentDidMount() {
		this.setState({ ipAddress: await getMyIp() });
	}

	// Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

	render() {
		return <h1>Mi ip es {this.state.ipAddress}</h1>;
	}
}

export default MyClass;
