import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.js';  
import 'materialize-css/dist/js/materialize.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
