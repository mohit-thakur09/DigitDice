import React, { Component } from "react";
import "./ball.css";

export default class Ball extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    number:1
   }
   setInterval(this.updateNumber,100);
 }

updateNumber=()=>{
  if(this.state.number<this.props.num){
    this.setState((prev)=>({number: prev.number+1}))
  }
}
  render() {
    return (
      <div className="ball">
        <div>
          {this.props.num && this.state.number}
        </div>
      </div>
    );
  }
}
