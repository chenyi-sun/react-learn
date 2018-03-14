import React, { Component } from 'react';
import './../App.css';

function Square(props){
    return (
        <button className="square" 
            onClick={() => props.onClick() }
        >
             {props.value}
        </button>
    );
}
// onClick={() => props.onClick() }
function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i = 0; i<lines.length;i++){
        const [a, b ,c] = lines[i];
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}


class Board extends Component {
  renderSquare(i) {
    return(
        <Square 
            value={this.props.squares[i]} 
            onClick ={()=>this.props.onClick(i)}
        />
    );
  }
    // onClick={() => this.handleClick(i)}
  render() {
    const status = 'none'
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
      super();
      this.state = {
          history: [
             {squares:Array(9).fill(null)}
          ],
          squares: Array(9).fill(null),
          isFlag: false,
          num: 0,
      }
  }
  Sclick(i){
     if(this.state.squares[i]||calculateWinner(this.state.squares)){
         return false;
     }
     if(this.state.num<=this.state.history.length){
         console.log(this.state.history.slice(0,this.state.num));
         console.log(this.state.history);
         this.setState({
            //  history: this.state.history.substr(0,this.state.num)
         });
     }
     var arr = this.state.squares.slice();
     arr[i] = !this.state.isFlag?'X':'O';
     this.setState({
          isFlag: !this.state.isFlag, 
          squares: arr,
          history: this.state.history.concat({
              squares: arr
          })       
     });
  }
  jumpTo(move){
     this.setState({
         squares: this.state.history[move].squares,
         num: move
     })
  }
  render() {
    const moves = this.state.history.map((step, move)=>{
        var name = move?'#move '+move+'step': 'game Start';
        return (
            <li key={move}>
                <a href="#" onClick={()=> this.jumpTo(move)}>{name}</a>
            </li>
        );
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i)=>this.Sclick(i)} squares={this.state.squares}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


export default App;