import React from "react";
import ReactDOM,{render} from "react-dom";
import Model1 from './../component/Model1'

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// var mountNode = document.getElementById("app");
// ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

render(
    <Model1/>,
    document.getElementById('app')
);
