import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
    constructor(props){
        supoer(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>
                    it is {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}



ReactDOM.render(
    <Clock/ >,
    document.getElementById('root')
);
