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

	handleKeyUp = event => {
		let newArray = [...this.state.liList];
		if (event.keyCode === 13) {
			newArray.push(this.state.inputValue);
			this.setState({ liList: newArray, inputValue: "" });
		}
	};

	deleteTask = i => {
		var newLiList = this.state.liList.filter(
			task => task != this.state.liList[i]
		);
		this.setState({ liList: newLiList });
	};

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
							onChange={() =>
								this.setState({
									inputValue: event.target.value
								})
							}
							onKeyUp={() => this.handleKeyUp(event)}
						/>

						<ul className="list">
							{this.state.liList.map((task, i) => (
								<li key={i}>
									{task}
									<span onClick={() => this.deleteTask(i)}>
										{" "}
										<i
											className="fa fa-trash"
											aria-hidden="true"
										/>{" "}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
