import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

/*function Formated(props){
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
            dom: (<div>sss</div>),
            value: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    activeLaser = () => {
        const numbers = ["测试1","测试2"];
        const listItems = numbers.map((number) =>
            (<li>{number}</li>)
        );
        this.setState(prevState => ({
            nowNumber: !prevState.nowNumber,
            dom: listItems[0]
        }));
    }
    handleSubmit(event){
        event.preventDefault();
        const als = ['dkjs', 'jdhsj'];
    }
    handleChange(event){
        var initValue = event.target.value;
        var showValue = null;
        if(initValue>=0){
            showValue = initValue;
        }
        else{
            showValue = 0;
        }
        this.setState({
            value: showValue
        });
    }
    render() {
        const lilist = ["测试","测试2"];
        const listItems = lilist.map((number,i) =>
            <li key={i}>{number}</li>
        );
        return (
            <div>
                <h1>
                    it is {this.state.date.toLocaleTimeString()}
                    <a onClick={this.activeLaser}>center</a>
                    <br/>
                    {listItems}
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        <input value="Submit" type="submit"/>
                    </form>
                </h1>
            </div>
        )
    }
}*/

/*
class SmallDom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.names,
            input: '',
        }
        this.i = 0;
        this.changeInput = this.changeInput.bind(this);
    }
    componentDidMount(){
       var setIn = setInterval(()=>{
            if(this.i > 5){
                clearInterval(setIn);
                return false;
            }
            this.setState({
                value: this.state.value + 1
            });
            // console.log(this.i);
            this.i = this.i + 1;
        },100);
    }
    changeInput(e){
        this.setState({
            input: e.target.value,
        });
    }
    componentWillUnmount(){
        // console.log("===================");
    }
    context(i){
        console.log(i);
    }
    render(){
        var self = this;
        function ses(i){
            console.log(i);
        }
        var list = [9,22,3,6];
        var listDoms = list.map((item, i)=>{
            return (<div key={i} onClick={ses(i)}>{item}</div>)
        });
        return (
            <div>
                <p>{this.state.value}</p>
                {listDoms}
                <input value={this.state.input} onChange={this.changeInput}/>
            </div>
        );
    }
}


class Doms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "sho",
            sj: "jks",
            time: '2018-04-02'
        }
        this.sj = "dss";
        this.setName = this.setName.bind(this);
    }

    setName(e){
        e.stopPropagation();
        var names = this.state.name==="sho"?"news":"sho";
        this.setState({
            name: names,
            time: '2018-04-03'
        });
    }
    render(){
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.sj}</div>
                <div>{this.sj}</div>
                <a href="#" onClick={this.setName}>ssss</a>
                <SmallDom names={this.state.time}/>
            </div>
        )
    }
}*/

class DomNews extends React.Component {
    render(){
        var ins = this.props.in;
        if(ins){
            return (<div>test</div>);
        }
        else{
            return (<div>gold in</div>)
        }
    }
}

// function DomNews(props){
//     const ins = props.in;
//     if(ins){
//         return (<div>test</div>);
//     }
//     else{
//         return (<div>gold in</div>);
//     }
   
// }
ReactDOM.render(
    (
    <div>
        <DomNews in = ""/>
        {/*<Clock  />*/}
    </div>
    ),
    document.getElementById('root')
);