import React, { Component } from 'react';
import './../App.css';

function tick(){
    console.log('ssss');
}
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: new Date().toLocaleTimeString(),
            show: 23
        }
    }
    componentDidMount() {
        setInterval(
         () => this.tick()
       , 1000);
       setTimeout(()=>{
           this.setState({
               show: 500
           });
       },10000);
        // this.timerID = setInterval(
        //     ,
        //     10000
        // );
    }
    componentWillUnmount(){
         console.log('remove');
         clearInterval(this.timerID); 
    }
    tick(){
        // console.log(this.state.data);
        this.setState({
            data: new Date().toLocaleTimeString(),
        });
    }
    checks(){
       
    }
    render(){
        return (
            <div>
                <div onClick={()=>this.checks()}>{this.state.data}</div>
                <div>{this.props.name}</div>
                <Second value={this.state.show}></Second>
             </div>
        );
    }
}


class Second extends Component{
    constructor(){
        super();
        this.state ={ 
            name:"ssss",
            num: 200,
        };
    }
    componentDidMount() {
        
    }
    total(){
        return this.props.value + this.state.num;
    }
    render(){
        return (
            <div>{this.state.name+this.props.value}</div>
        );
    }
}
export default App;