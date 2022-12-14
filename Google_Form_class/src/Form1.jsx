import { Component } from "react";

class Xyz extends Component {
  state = {
    NAme: "",
    Radio: "",
    password: "",
    CheckBox: "",
    textarea: "",
    select: "",
    range: "",
    date: "",
  };
  render() {
    return (
      <>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type={"text"}
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor="Gender"> Gender : </label>
            <br />
            <label htmlFor="Male"> Male </label>
            <input
              type={"radio"}
              name={"Gender"}
              value={"Male"}
              onchange={(e) => {
                this.setState({ radio: e.target.value });
              }}
            />

            <label htmlFor="female"> Female </label>
            <input
              type={"radio"}
              name={"Gender"}
              value={"female"}
              onChange={(e) => {
                this.setState({ radio: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor="Password">Password :</label>
            <input
              type={"text"}
              name={"myPassword"}
              value={this.state.myPassword}
              onchange={(e) => {
                this.setState({ Password: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor="Checkbox">Checkbox : </label>
            <br />
            <label htmlFor="Checkbox">Milk : </label>

            <input
              type={"checkbox"}
              value={"checkbox"}
              name={"checkbox"}
              onchange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <br />
            <label htmlFor="Checkbox">water: </label>

            <input
              type={"checkbox"}
              value={"checkbox"}
              name={"checkbox"}
              onchange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor={Range}>Range: </label>
            <input
              type={"Range"}
              value={this.state.rangeInput}
              name={"Range"}
              onchange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>

          <div>
            <label htmlFor={Date}>Date: </label>
            <input
              type={"date"}
              value={this.state.myDate}
              name={"myDate"}
              onchange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <p>Name:{this.state.name}</p>
          <p>Gender:{this.state.radio}</p>
          <p>Password:{this.state.Password}</p>
        </div>
      </>
    );
  }
}

export default Xyz;
