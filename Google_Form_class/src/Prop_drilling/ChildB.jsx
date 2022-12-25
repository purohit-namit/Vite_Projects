import { Component } from "react";
import ChildC from "./ChildC";

class ChildB extends Component {
  render() {
    return (
      <>
        <p> The NAme is {this.props.name}</p>
        <ChildC name=" NAmit" />
      </>
    );
  }
}

export default ChildB;
