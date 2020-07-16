import React from "react";
import { getMyIp } from "./get-ip.js";

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ipAddress: ".." };
	}

	async componentDidMount() {
		const result = await getMyIp();
		this.setState({ ipAddress: result.ip });
	}

	render() {
		return <h1>Mi ip es {this.state.ipAddress}</h1>;
	}
}

export default MyClass;
