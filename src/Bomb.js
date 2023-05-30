// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  };

  updateTimer = () => {
    const newSecondsLeft = this.state.secondsLeft - 1;
    this.setState({
      secondsLeft: newSecondsLeft,
    });
  };
  
  render() {
    return (
      <div className="bomb" onClick={this.updateTimer}> 
          {(() => {
              if (this.state.secondsLeft == 0) {
                  return (
                    <div>Boom!</div>
                  )
                  } else {
                    return (
                      <div>{this.state.secondsLeft} seconds left before I go boom!</div>
                    )
                  }
                })()
          }        
      </div>
    );
  }
}
