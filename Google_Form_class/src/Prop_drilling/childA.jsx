import { Component } from "react";
import ChildB from "./ChildB";

class ChildA extends Component {
  render() {
    return (
      <>
        <p> The NAme is {this.props.name}</p>
        <ChildB name="Namit" />
      </>
    );
  }
}

export default ChildA;
