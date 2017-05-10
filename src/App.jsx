
import React, { Component } from 'react';

const Text = () => (
	<p style={{ textAlign: 'center' }}>
		A <strong>bare-bones</strong> React application,
		<br />
		transpiled by Babel, bundled, and sent to the browser.
	</p>
);

const style = {
	display: 'flex',
	flexFlow: 'column nowrap',
	alignItems: 'center',
};

class App extends Component {
	constructor() {
		super();

		this.onClick = this.incrementCount.bind(this);
		this.state = { count: 0 };
	}

	render() {
		return (
			<div style={{ ...style, margin: '3em 0.5em' }}>
				<h1>Hello world!</h1>
				<Text />
				<div style={style}>
					<span>{this.state.count}</span>
					<input type="button" onClick={this.onClick} value="Click Me" />
				</div>
			</div>
		);
	}

	incrementCount() {
		this.setState(({ count }) => ({ count: count + 1 }));
	}
}

export default App;
