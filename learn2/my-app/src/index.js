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

class SearchDom extends React.Component {
    render(){
        return (
        <div>
            <form>
                <input  className="search-head" placeholder="Search..."/>
                <p>
                    <input type="checkbox"/>
                    &nbsp;Only show products in stock
                </p>
            </form>
        </div>
        );
    }
}
class ShowBox extends React.Component {
    render(){
        return (
            <div></div>
        );
    }
}
class InitDom extends React.Component {
    render(){
        return (
            <div className="search-box">
                <SearchDom></SearchDom>
                <ShowBox data = {this.props.data}></ShowBox>
            </div>
        );
    }
}



ReactDOM.render(
  <InitDom data={date}/>,
    document.getElementById('root')
);