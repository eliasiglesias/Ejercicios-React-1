import React from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

class Contador extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
		};
	}

	sumaClick = () => {
		// Ingresa aquí tu código para aumentar el contador
		this.setState({ clicks: this.state.clicks + 1 });
	};

	render() {
		return (
			<div className="alert alert-primary">
				<MyLabel clicks={this.state.clicks} />
				<Boton sumaClick={this.sumaClick} clicks={this.state.clicks} />
			</div>
		);
	}
}

export default Contador;
