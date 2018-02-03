import React, { Component } from 'react';

import Canvas from './canvas';

class App extends Component {
	render() {
		let height = window.innerHeight;
		let width = window.innerWidth * 0.8;
		
		return (
			<div className="App">
				<Canvas width={width} height={height}/>
			</div>
		);
	}
}

export default App;
