import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './components/HelloMessage';
import App from './components/start1';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App name="sss"/>, document.getElementById('root'));
var name = 'ssss';
function tick(){
   ReactDOM.render(<App name={name}/>,document.getElementById('root'));
}

tick();
registerServiceWorker();
