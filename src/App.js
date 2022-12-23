import { Component } from 'react';
import './App.css';

export default class CounterApp extends Component{
  constructor(){
    super();

    this.state = {
      counter : 0,
    }
  }

  handleDecrease = ()=>{
    this.setState({
      counter:this.state.counter-1
    })
  }

  handleIncrease = ()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }

  handleReset = ()=>{
    this.setState({
      counter:0
    })
  }


  render(){
    return(
      <div className="counter">
      <h1>Counter App</h1>
      <span className="counter-output">{this.state.counter}</span>
      <div className="container">
        <button className="control" onClick={this.handleIncrease}>+</button>
        <button className="control" onClick={this.handleDecrease}>-</button>
        <button className="reset" onClick={this.handleReset}>Reset</button>
      </div>
    </div>
    )
  }
}