import React from "react";

class Contador extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
		};
	}

	sumaClick = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	};

	render() {
		return (
			<div className="alert alert-primary">
				<p>
					<b>Has dado {this.state.clicks} clicks</b>
				</p>
				<button className="btn btn-info" onClick={this.sumaClick}>
					suma 1
				</button>
			</div>
		);
	}
}

export default Contador;
