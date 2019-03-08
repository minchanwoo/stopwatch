import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    sec: 0,
    min: 0,
  }

  componentDidMount() {

    setInterval(() => {
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
    }, 250);
  }

  render() {
    return (
      <div className="App">
        {this.state.min}:
        {this.renderSec()}초
      </div>
    );
  }

  renderSec() {
    if(this.state.sec < 10) {
      return `0${this.state.sec}`
    } else {
      return this.state.sec
    }
  }
}

export default App;
