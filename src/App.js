import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particleConfig from './utils/particles-config.json';
import Menu from './react-components/Menu';
import Main from './react-components/Main';
import './css/App.css';

class App extends Component {

	render() {

		return (
			<div className='App'>


				<div className='particles'>
					<Particles style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%'
					}}
						params={particleConfig}
					/>
				</div>
				<Menu />
				<Main />

			</div>
		);
	}
}

export default App;
