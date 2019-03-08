import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    sec: 0,
    min: 0,
  }

  componentDidMount() {

    setInterval(() => {
      if(this.state.min < 5) {
        if(this.state.sec === 15) {
          this.setState({
            sec: 0,
            min: this.state.min + 1,
          });
        } else {
          this.setState({
            sec: this.state.sec + 1
          });
        }
      }
    }, 250);
  }

  render() {
    return (
      <div className="App">
        {this.renderTime(this.state.min)}:
        {this.renderTime(this.state.sec)}초
      </div>
    );
  }

  renderTime(time) {
    if(time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }
}

export default App;
