import React, { Component } from 'react';

import Canvas from './components/canvas';
import clarifaiTemp from './api/clarifai.js';

class App extends Component {
	render() {
		let height = window.innerHeight;
		let width = window.innerWidth * 0.8;
		let array1 = clarifaiTemp();
		array1.then(data => {
			console.log(data)
		})

		return (
			<div className="App">
				<Canvas width={width} height={height}/>
			</div>
		);
	}
}

export default App;
