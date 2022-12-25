import { Component } from "react";

class ChildC extends Component {
  render() {
    return (
      <>
        <p> The NAme is {this.props.name}</p>
      </>
    );
  }
}

export default ChildC;
