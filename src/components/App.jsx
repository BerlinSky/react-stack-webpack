import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: [
				'Hi there, How silly is it?',
				'I do not think so, do you?'
			]
		};
	}

	render() {
		var messageNodes = this.state.message.map((message) => {
			return (
				<div>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		);
	}
}

export default App;
