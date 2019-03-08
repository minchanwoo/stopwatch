import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    sec: 0,
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        sec: this.state.sec +1
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.sec}초
      </div>
    );
  }
}

export default App;
