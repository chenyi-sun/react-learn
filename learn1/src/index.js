import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './components/HelloMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="sss"/>, document.getElementById('root'));
registerServiceWorker();
