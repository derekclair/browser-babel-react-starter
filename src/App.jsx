
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Stringify from './Stringify.jsx';

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
	constructor(props) {
		super(props);

		// this.store = this.props.store;
		this.store = props.store;

		this.onClick = this.incrementCount.bind(this);

		this.state = { count: 0 };
	}

	render() {
		return (
			<div style={{ ...style, margin: '3em 0.5em' }}>
				<h1>Hello world!</h1>
				<Text />
				<div style={style}>
					<span>this.state: {this.state.count}</span>
					<input type="button" onClick={this.onClick} value="Click Me" />
					<div>
						<Stringify {...this.state} />
					</div>
				</div>
				<div style={style}>
					<span>this.store: {this.store.count}</span>
					<input type="button" onClick={this.store.increment} value="Click Me" />
					<div>
						<Stringify {...this.store} />
					</div>
				</div>
				<div style={style}>
					<span>this.props.store: {this.props.store.count}</span>
					<input type="button" onClick={this.props.store.increment} value="Click Me" />
					<div>
						<Stringify {...this.props} />
					</div>
				</div>
			</div>
		);
	}

	incrementCount() {
		this.setState(({ count }) => ({ count: count + 1 }));
	}
}

export default App;
// export default observer(App);
