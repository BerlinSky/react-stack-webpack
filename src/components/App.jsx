import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			message: [
				'Hi there, How silly is it?',
				'I do not think so, do you?',
				'How do I know??'
			]
		};
	}

	render() {
		// debugger;

		var messageNodes = this.state.message.map((message) => {
			return (
				<div style={{color: 'white'}}>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		);
	}
}

export default App;
