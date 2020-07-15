import React from "react";

class MyLabel extends React.Component {
	render() {
		return (
			<p>
				<b>Has dado {this.props.clicks} clicks</b>
			</p>
		);
	}
}

export default MyLabel;
