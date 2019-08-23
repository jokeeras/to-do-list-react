import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div className="sizeBig">
        <p className={this.getBadgeClasses()}>{this.formatCount()}</p>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm font-weight-bold"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge mx-2 font-weight-bold badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
