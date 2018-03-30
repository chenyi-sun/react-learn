import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/Test';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class Welcome extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>
    }
}

const skl = {
    nm: 'klksdddS'
}
const element = (
    <div>
        <h1>hello world!</h1>
        <Welcome name = "测试"/>
        <Welcome name = "ask"/>
        <Test names = {skl}/>
        <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('root')
);
