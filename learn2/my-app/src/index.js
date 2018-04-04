import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var date = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class TrDom extends React.Component {
    render(){
        if(this.props.type === '1'){
            return (
                <tr >
                    <th style={{color:this.props.stock?'red':''}}>{this.props.name}</th>
                    <th>{this.props.price}</th>
                </tr>
            );
        }
        else{
            return (
                <tr >
                    <th colSpan="2">{this.props.name}</th>
                </tr>
            );
        }
    }
}

class SearchDom extends React.Component {
    render(){
        return (
        <div>
            <form>
                <input  className="search-head" value={this.props.filterText} placeholder="Search..." onChange={this.props.change}/>
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.checkBox}/>
                    &nbsp;Only show products in stock
                </p>
            </form>
        </div>
        );
    }
}
class ShowBox extends React.Component {
    render(){
        var rows = [];
        var lastCategory = null;
        var self = this;
        this.props.data.forEach(function(item,i){
            if(((item.name.indexOf(self.props.filterText)>=0)||self.props.filterText==='')&&(!(self.props.inStockOnly)||(self.props.inStockOnly&&item.stocked))){
                 if(item.category !== lastCategory){
                    rows.push(
                        <TrDom key={i} name={item.category}  type="2"/>
                    );
                    lastCategory = item.category;
                }
                rows.push(
                    <TrDom key={i+'s'} name={item.name} price={item.price} stock={item.stocked} type="1"/>   
                );
            }
        });
        return (
            <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                    {rows}
                </tbody>
            </table>
        );
    }
}
class InitDom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.change = this.change.bind(this);
        this.checkBox = this.checkBox.bind(this);
    }
    change(e){
        this.setState({
            filterText: e.target.value
        });
    }
    checkBox(){
        this.setState({
            inStockOnly: !this.state.inStockOnly
        });
    }
    render(){
        return (
            <div className="search-box">
                <SearchDom
                    filterText={this.state.filterText}
                    change={this.change}
                    inStockOnly={this.state.inStockOnly}
                    checkBox={this.checkBox}
                ></SearchDom>
                <ShowBox 
                    data = {this.props.data}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                ></ShowBox>
            </div>
        );
    }
}

ReactDOM.render(
  <InitDom data={date}/>,
    document.getElementById('root')
);