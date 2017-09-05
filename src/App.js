import React, { Component } from 'react';
import './css/App.css';
import Particles from 'react-particles-js';
import particleConfig from './utils/particles-config.json';
import Menu from './react-components/Menu';
import $ from 'jquery';

class App extends Component {

	render() {

		return (
			<div className='App'>

				<Menu />

				<div className="main-box">
					<p>Hi, I'm Mauricio.</p>
					<p>Please check my social midias.</p>
					<div className="main-box-social">
						<a className="social-item" href='https://www.linkedin.com/in/mauriciolassakoski' target="_blank"><i className='fa fa-linkedin fa-2x'></i></a>
						<a className="social-item" href='https://github.com/mlassakoski' target="_blank"><i className='fa fa-github fa-2x'></i></a>
					</div>
				</div>

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
		);
	}
}

export default App;
