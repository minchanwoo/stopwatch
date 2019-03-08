import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    sec: 0,
    min: 5,
    isPlaying: false,
  }

  componentDidMount() {

    setInterval(() => {
      if(this.state.isPlaying){
        if(this.state.sec === 0) {
          this.setState({
            sec: 59,
            min: this.state.min - 1,
          });
          } else {
            this.setState({
              sec: this.state.sec - 1
            });
          }
      }
      
    }, 100);
  }

  render() {
    return (
      <div className="App">
        {this.renderTime(this.state.min)}:
        {this.renderTime(this.state.sec)}초

        <div>
          {this.state.isPlaying
          ? 
          <div>
            <button onClick={()=> this.setState({isPlaying: false, min: 5, sec: 0})}>STOP</button>
            <button onClick={()=> this.setState({isPlaying: false})}>PAUSE</button>
          </div>
          : 
          <button onClick={()=> this.setState({isPlaying: true})}>START</button>
           }
         </div>
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
