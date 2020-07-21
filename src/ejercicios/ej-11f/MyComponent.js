import React from "react";
import { getMyIp } from "./get-ip";

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ipAddress: "...", isLoading: true };
	}

	async componentDidMount() {
		const data = await getMyIp();
		this.setState({ ...this.state, ipAddress: data.ip, isLoading: false });
	}

	render() {
		return (
			<div>
				{this.state.isLoading ? (
					<h1>Cargando...</h1>
				) : (
					<h1>Mi ip es {this.state.ipAddress}</h1>
				)}
			</div>
		);
	}
}

export default MyClass;
