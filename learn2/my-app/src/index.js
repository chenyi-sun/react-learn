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
            <input  className="search-head"/>
        </div>
        );
    }
}

class InitDom extends React.Component {
    render(){
        return (
            <div className="search-box">
                <SearchDom></SearchDom>
            </div>
        );
    }
}



ReactDOM.render(
  <InitDom/>,
    document.getElementById('root')
);