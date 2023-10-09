import React from "react";
import Ball from "./Ball";
import "./lottery.css";

class Lottery extends React.Component {
  static defaultProps = {
    title: "Lotto",
    maxValue: 50,
    maxSize: 6,
  };

  constructor(props) {
    super(props);
    this.state = {
      numsArr: Array.from({ length: this.props.maxSize }),
    };
  }

  handleClick = (e) => {
    let arr = [];
    for (let i = 1; i <= this.props.maxSize; i++) {
      let randomNum = Math.floor(Math.random() * this.props.maxValue) + 1;
      arr.push(randomNum);
    }
    this.setState({ numsArr: arr });
  };

  render() {
    return (
      <div className="lotteryContainer">
        <h2>{this.props.title}</h2>
        <div className="ballsContainer">
          {this.state.numsArr.map((num) => (
            <Ball num={num} />
          ))}
        </div>
        <button onClick={this.handleClick} className="btn">
          Generate Random Numbers
        </button>
      </div>
    );
  }
}

export default Lottery;
