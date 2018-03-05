import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.css'
// import App from './App';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
