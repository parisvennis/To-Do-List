import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: "",
			liList: []
		};
	}

	handleKeyDown(event) {
		let newArray = [...this.state.liList];
		if (event.keyCode === 13) {
			newArray.push(this.state.inputValue);
			this.setState({ liList: newArray });
		}
	}

	render() {
		console.log(this.state.liList);
		return (
			<div className="fullContainer">
				<h1>todos</h1>
				<div className="container">
					<div className="fullCard">
						<input
							type="text"
							value={this.state.inputValue}
							onKeyDown={() => this.handleKeyDown(event)}
							onChange={() =>
								this.setState({
									inputValue: event.target.value
								})
							}
						/>
						<ul className="list">
							<li>Walk</li>
							<li>Eat</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
