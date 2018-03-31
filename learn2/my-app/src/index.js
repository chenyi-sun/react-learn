import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
function Formated(props){
    return (
    <div>
        <p>it is {props.data.toLocaleTimeString()}</p>
        <p>{props.name}</p>
    </div>
    )
}


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            nowNumber: true,
        }
        this.activeLaser = this.activeLaser.bind(this);
    }
    componentDidMount(){
        this.timerDI = setInterval(
            ()=> this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerDI);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    activeLaser(){
        // function handleClick(e){
        console.log("dksjkjs");
        this.setState(prevState => ({
            nowNumber: !prevState.nowNumber
        }));

        // }
        // this.setState(
        //     prevState => ({
        //        nowNumber:  !prevState.nowNumber
        //     })
        // );
    }
    render() {
        return (
            <div>
                <h1>
                    it is {this.state.date.toLocaleTimeString()}
                    <Formated name={ks} data= {this.state.date}/>
                    <a href="#" onClick={this.activeLaser}>center</a>
                    <p>{this.state.nowNumber?"OFF":"ON"}</p>
                </h1>
            </div>
        )
    }
}

let ks = "sss";

ReactDOM.render(
    (
    <div>
        <Clock  />
    </div>
    ),
    document.getElementById('root')
);
