import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}/>
      </div>
    );
  }
}

export default App;
